import http.client
import json
import os
import socket
import subprocess
import sys
import tempfile
import time
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SITE_DIR = ROOT / "site"
SERVER = ROOT / "server.py"


def free_port():
    s = socket.socket()
    s.bind(("127.0.0.1", 0))
    port = s.getsockname()[1]
    s.close()
    return port


class ApiCase(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.tmp = tempfile.TemporaryDirectory()
        cls.db_path = Path(cls.tmp.name) / "test.sqlite3"
        cls.port = free_port()
        env = os.environ.copy()
        env["YG_DB_PATH"] = str(cls.db_path)
        env["YG_PORT"] = str(cls.port)
        cls.proc = subprocess.Popen(
            [sys.executable, str(SERVER), "--site", str(SITE_DIR), "--port", str(cls.port)],
            cwd=str(ROOT), env=env, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True,
        )
        deadline = time.time() + 8
        while time.time() < deadline:
            try:
                conn = http.client.HTTPConnection("127.0.0.1", cls.port, timeout=0.5)
                conn.request("GET", "/api/health")
                res = conn.getresponse()
                if res.status == 200:
                    return
            except OSError:
                time.sleep(0.1)
        output = cls.proc.stdout.read() if cls.proc.stdout else ""
        raise RuntimeError(f"server did not start: {output}")

    @classmethod
    def tearDownClass(cls):
        cls.proc.terminate()
        try:
            cls.proc.wait(timeout=3)
        except subprocess.TimeoutExpired:
            cls.proc.kill()
        cls.tmp.cleanup()

    def request(self, method, path, body=None, cookie=None):
        payload = json.dumps(body).encode() if body is not None else None
        headers = {"Content-Type": "application/json"}
        if cookie:
            headers["Cookie"] = cookie.split(";", 1)[0]
        conn = http.client.HTTPConnection("127.0.0.1", self.port, timeout=5)
        conn.request(method, path, payload, headers)
        res = conn.getresponse()
        data = res.read().decode()
        parsed = json.loads(data) if data else None
        set_cookie = res.getheader("Set-Cookie")
        return res.status, parsed, set_cookie

    def admin_cookie(self):
        status, body, cookie = self.request("POST", "/api/auth/login", {"email": "admin@yeouidogold.com", "password": "admin1234"})
        self.assertEqual(status, 200)
        self.assertEqual(body["user"]["role"], "admin")
        return cookie

    def raw_request(self, method, path, body=None, cookie=None):
        payload = json.dumps(body).encode() if body is not None else None
        headers = {"Content-Type": "application/json"}
        if cookie:
            headers["Cookie"] = cookie.split(";", 1)[0]
        conn = http.client.HTTPConnection("127.0.0.1", self.port, timeout=5)
        conn.request(method, path, payload, headers)
        res = conn.getresponse()
        data = res.read()
        return res.status, data, dict(res.getheaders())

    def test_admin_login_uses_database_session_cookie_and_can_update_settings(self):
        status, body, cookie = self.request("POST", "/api/auth/login", {"email": "admin@yeouidogold.com", "password": "admin1234"})
        self.assertEqual(status, 200)
        self.assertEqual(body["user"]["role"], "admin")
        self.assertIn("yg_session=", cookie)

        status, body, _ = self.request("PUT", "/api/admin/settings", {"siteNotice": "DB 저장 테스트", "noticeTitle": "운영 공지"}, cookie)
        self.assertEqual(status, 200)
        self.assertEqual(body["settings"]["siteNotice"], "DB 저장 테스트")

        status, body, _ = self.request("GET", "/api/settings")
        self.assertEqual(status, 200)
        self.assertEqual(body["settings"]["siteNotice"], "DB 저장 테스트")
        self.assertEqual(body["settings"]["noticeTitle"], "운영 공지")

    def test_join_login_cart_and_order_are_persisted_in_sqlite(self):
        email = "buyer@example.com"
        status, body, cookie = self.request("POST", "/api/auth/register", {"email": email, "password": "pw1234", "name": "구매자", "phone": "010-1111-2222"})
        self.assertEqual(status, 201)
        self.assertEqual(body["user"]["email"], email)
        self.assertIn("yg_session=", cookie)

        status, body, _ = self.request("POST", "/api/cart/items", {"id": "185", "name": "골드바", "price": 100000, "qty": 2, "href": "shop_view/185.html", "img": "upload/item.png"}, cookie)
        self.assertEqual(status, 200)
        self.assertEqual(body["cart"][0]["qty"], 2)

        status, body, _ = self.request("POST", "/api/orders", {}, cookie)
        self.assertEqual(status, 201)
        self.assertEqual(body["order"]["totalAmount"], 200000)
        self.assertEqual(body["order"]["items"][0]["productName"], "골드바")

        status, body, _ = self.request("GET", "/api/cart", cookie=cookie)
        self.assertEqual(status, 200)
        self.assertEqual(body["cart"], [])

    def test_non_admin_cannot_access_admin_api(self):
        status, body, cookie = self.request("POST", "/api/auth/register", {"email": "normal@example.com", "password": "pw1234", "name": "일반"})
        self.assertEqual(status, 201)
        status, body, _ = self.request("GET", "/api/admin/users", cookie=cookie)
        self.assertEqual(status, 403)

    def test_admin_can_update_order_status_and_audit_log_records_action(self):
        admin = self.admin_cookie()
        status, body, user_cookie = self.request("POST", "/api/auth/register", {"email": "status-buyer@example.com", "password": "pw1234", "name": "상태구매자"})
        self.assertEqual(status, 201)
        self.request("POST", "/api/cart/items", {"id": "coin-1", "name": "상태검증 코인", "price": 50000, "qty": 1}, user_cookie)
        status, body, _ = self.request("POST", "/api/orders", {}, user_cookie)
        self.assertEqual(status, 201)
        order_id = body["order"]["id"]

        status, body, _ = self.request("PUT", f"/api/admin/orders/{order_id}", {"status": "paid"}, admin)
        self.assertEqual(status, 200)
        self.assertEqual(body["order"]["status"], "paid")

        status, body, _ = self.request("GET", "/api/admin/audit-logs", cookie=admin)
        self.assertEqual(status, 200)
        self.assertTrue(any(log["action"] == "order_status_update" and str(order_id) in log["detail"] for log in body["logs"]))

    def test_admin_can_download_sqlite_backup_and_security_headers_are_sent(self):
        admin = self.admin_cookie()
        status, data, headers = self.raw_request("GET", "/api/admin/backup", cookie=admin)
        self.assertEqual(status, 200)
        self.assertGreater(len(data), 1000)
        self.assertEqual(headers.get("Content-Type"), "application/octet-stream")
        self.assertIn("attachment", headers.get("Content-Disposition", ""))
        self.assertEqual(headers.get("X-Frame-Options"), "DENY")
        self.assertEqual(headers.get("X-Content-Type-Options"), "nosniff")


if __name__ == "__main__":
    unittest.main()
