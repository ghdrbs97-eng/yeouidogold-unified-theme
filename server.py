#!/usr/bin/env python3
"""DB-backed 운영형 과제 서버 for the Yeouido Gold clone.

No external packages required: static files + JSON API + SQLite.
"""
from __future__ import annotations

import argparse
import base64
import hashlib
import hmac
import json
import mimetypes
import os
import shutil
import secrets
import sqlite3
import sys
import time
from http import cookies
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlparse

ROOT = Path(__file__).resolve().parent
DEFAULT_SITE = ROOT / "site"
DB_PATH = Path(os.environ.get("YG_DB_PATH", ROOT / "data" / "yeouidogold.sqlite3"))
SESSION_COOKIE = "yg_session"
ADMIN_EMAIL = os.environ.get("YG_ADMIN_EMAIL", "admin@yeouidogold.com").lower()
ADMIN_PASSWORD = os.environ.get("YG_ADMIN_PASSWORD", "admin1234")
DEFAULT_SETTINGS = {
    "noticeTitle": "공지사항",
    "noticeDesc": "배송·입고·가격 변동 등 운영 업데이트를 확인하세요.",
    "faqTitle": "FAQ · 품질/교환",
    "faqDesc": "스팟·톤·스크래치/캡슐 손상 기준을 한 번에 안내합니다.",
    "siteNotice": "",
}


def now() -> int:
    return int(time.time())


def db() -> sqlite3.Connection:
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys=ON")
    return conn


def hash_password(password: str, salt: str | None = None) -> str:
    salt = salt or secrets.token_hex(16)
    digest = hashlib.pbkdf2_hmac("sha256", password.encode(), salt.encode(), 180_000)
    return f"pbkdf2_sha256$180000${salt}${base64.b64encode(digest).decode()}"


def verify_password(password: str, stored: str) -> bool:
    try:
        algo, rounds, salt, digest = stored.split("$", 3)
        if algo != "pbkdf2_sha256":
            return False
        raw = hashlib.pbkdf2_hmac("sha256", password.encode(), salt.encode(), int(rounds))
        return hmac.compare_digest(base64.b64encode(raw).decode(), digest)
    except Exception:
        return False


def init_db() -> None:
    with db() as conn:
        conn.executescript(
            """
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                email TEXT NOT NULL UNIQUE,
                password_hash TEXT NOT NULL,
                name TEXT NOT NULL,
                phone TEXT DEFAULT '',
                role TEXT NOT NULL DEFAULT 'user',
                created_at INTEGER NOT NULL
            );
            CREATE TABLE IF NOT EXISTS sessions (
                token TEXT PRIMARY KEY,
                user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
                created_at INTEGER NOT NULL,
                expires_at INTEGER NOT NULL
            );
            CREATE TABLE IF NOT EXISTS site_settings (
                key TEXT PRIMARY KEY,
                value TEXT NOT NULL,
                updated_at INTEGER NOT NULL
            );
            CREATE TABLE IF NOT EXISTS cart_items (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
                product_id TEXT NOT NULL,
                product_name TEXT NOT NULL,
                price INTEGER NOT NULL DEFAULT 0,
                qty INTEGER NOT NULL DEFAULT 1,
                href TEXT DEFAULT '',
                img TEXT DEFAULT '',
                updated_at INTEGER NOT NULL,
                UNIQUE(user_id, product_id)
            );
            CREATE TABLE IF NOT EXISTS orders (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
                total_amount INTEGER NOT NULL,
                status TEXT NOT NULL DEFAULT 'created',
                created_at INTEGER NOT NULL
            );
            CREATE TABLE IF NOT EXISTS order_items (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
                product_id TEXT NOT NULL,
                product_name TEXT NOT NULL,
                price INTEGER NOT NULL,
                qty INTEGER NOT NULL,
                href TEXT DEFAULT '',
                img TEXT DEFAULT ''
            );
            CREATE TABLE IF NOT EXISTS audit_logs (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                actor_user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
                action TEXT NOT NULL,
                detail TEXT NOT NULL DEFAULT '',
                ip TEXT DEFAULT '',
                created_at INTEGER NOT NULL
            );
            """
        )
        admin = conn.execute("SELECT id FROM users WHERE email=?", (ADMIN_EMAIL,)).fetchone()
        if admin:
            conn.execute("UPDATE users SET role='admin', password_hash=? WHERE email=?", (hash_password(ADMIN_PASSWORD), ADMIN_EMAIL))
        else:
            conn.execute(
                "INSERT INTO users(email,password_hash,name,phone,role,created_at) VALUES(?,?,?,?,?,?)",
                (ADMIN_EMAIL, hash_password(ADMIN_PASSWORD), "관리자", "", "admin", now()),
            )
        for k, v in DEFAULT_SETTINGS.items():
            conn.execute("INSERT OR IGNORE INTO site_settings(key,value,updated_at) VALUES(?,?,?)", (k, v, now()))


def row_user(row: sqlite3.Row | None) -> dict | None:
    if not row:
        return None
    return {"id": row["id"], "email": row["email"], "name": row["name"], "phone": row["phone"], "role": row["role"], "createdAt": row["created_at"]}


def parse_body(handler) -> dict:
    length = int(handler.headers.get("Content-Length", "0") or 0)
    if not length:
        return {}
    raw = handler.rfile.read(length).decode("utf-8")
    return json.loads(raw or "{}")


def get_cookie_token(handler) -> str | None:
    jar = cookies.SimpleCookie(handler.headers.get("Cookie", ""))
    morsel = jar.get(SESSION_COOKIE)
    return morsel.value if morsel else None


def current_user(handler) -> dict | None:
    token = get_cookie_token(handler)
    if not token:
        return None
    with db() as conn:
        conn.execute("DELETE FROM sessions WHERE expires_at<?", (now(),))
        row = conn.execute(
            "SELECT u.* FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token=? AND s.expires_at>=?",
            (token, now()),
        ).fetchone()
        return row_user(row)


def settings_dict(conn: sqlite3.Connection) -> dict:
    cfg = dict(DEFAULT_SETTINGS)
    for row in conn.execute("SELECT key,value FROM site_settings"):
        cfg[row["key"]] = row["value"]
    return cfg


def cart_rows(conn: sqlite3.Connection, user_id: int) -> list[dict]:
    return [
        {"id": r["product_id"], "name": r["product_name"], "price": r["price"], "qty": r["qty"], "href": r["href"], "img": r["img"]}
        for r in conn.execute("SELECT * FROM cart_items WHERE user_id=? ORDER BY updated_at DESC", (user_id,))
    ]


def log_audit(conn: sqlite3.Connection, actor_user_id: int | None, action: str, detail: str, ip: str = "") -> None:
    conn.execute(
        "INSERT INTO audit_logs(actor_user_id,action,detail,ip,created_at) VALUES(?,?,?,?,?)",
        (actor_user_id, action, detail[:1000], ip[:80], now()),
    )


class Handler(SimpleHTTPRequestHandler):
    server_version = "YeouidoGoldDB/1.0"

    def __init__(self, request, client_address, server, directory=None, **kwargs):
        super().__init__(request, client_address, server, directory=str(server.site_dir), **kwargs)

    def log_message(self, fmt, *args):
        if os.environ.get("YG_VERBOSE"):
            super().log_message(fmt, *args)

    def security_headers(self):
        self.send_header("X-Frame-Options", "DENY")
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Referrer-Policy", "strict-origin-when-cross-origin")
        self.send_header("Permissions-Policy", "camera=(), microphone=(), geolocation=()")

    def end_headers(self):
        # Apply basic hardening to static files as well as APIs.
        if not getattr(self, "_security_headers_sent", False):
            self.security_headers()
        super().end_headers()

    def send_json(self, status: int, payload: dict, cookie: str | None = None):
        data = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Cache-Control", "no-store")
        self.security_headers(); self._security_headers_sent = True
        if cookie:
            self.send_header("Set-Cookie", cookie)
        self.end_headers()
        self.wfile.write(data)

    def send_binary(self, status: int, data: bytes, filename: str):
        self.send_response(status)
        self.send_header("Content-Type", "application/octet-stream")
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Content-Disposition", f'attachment; filename="{filename}"')
        self.send_header("Cache-Control", "no-store")
        self.security_headers(); self._security_headers_sent = True
        self.end_headers()
        self.wfile.write(data)

    def require_user(self):
        user = current_user(self)
        if not user:
            self.send_json(401, {"ok": False, "error": "login_required"})
            return None
        return user

    def require_admin(self):
        user = self.require_user()
        if not user:
            return None
        if user["role"] != "admin":
            self.send_json(403, {"ok": False, "error": "admin_required"})
            return None
        return user

    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path
        if path.startswith("/api/"):
            return self.route_api("GET", path)
        if path.endswith(".cm"):
            return self.send_json(200, {"ok": True, "html": "", "items": [], "message": ""})

        # Canonicalize mirrored Imweb filter/sort/page URLs before serving HTML.
        # Without this, /allgold/?sort=... may render allgold.html but relative
        # assets resolve as /allgold/js/... and create secondary 404s.
        site_dir = Path(self.server.site_dir)
        clean = unquote(path.lstrip("/"))
        canonical = None
        stripped = clean.rstrip("/")
        if path.endswith("/") and stripped and not Path(stripped).suffix and (site_dir / f"{stripped}.html").exists():
            canonical = "/" + f"{stripped}.html"
        elif clean.endswith(".html/") and (site_dir / clean.rstrip("/")).exists():
            canonical = "/" + clean.rstrip("/")
        elif ".html/" in clean:
            base = clean.split(".html/", 1)[0] + ".html"
            if (site_dir / base).exists():
                canonical = "/" + base
        elif "/@" in clean:
            base = clean.split("/@", 1)[0].rstrip("/")
            if base and (site_dir / f"{base}.html").exists():
                canonical = "/" + f"{base}.html"
        elif "@" in clean:
            base = clean.split("@", 1)[0].rstrip("/")
            if base.endswith(".html") and (site_dir / base).exists():
                canonical = "/" + base
        if canonical and canonical != path:
            location = canonical + (("?" + parsed.query) if parsed.query else "")
            self.send_response(302)
            self.send_header("Location", location)
            self.security_headers(); self._security_headers_sent = True
            self.end_headers()
            return

        return self.serve_static(path)

    def do_POST(self):
        path = urlparse(self.path).path
        if path.endswith(".cm"):
            return self.send_json(200, {"ok": True, "html": "", "items": [], "message": ""})
        return self.route_api("POST", path)

    def do_PUT(self):
        path = urlparse(self.path).path
        if path.endswith(".cm"):
            return self.send_json(200, {"ok": True, "html": "", "items": [], "message": ""})
        return self.route_api("PUT", path)

    def do_DELETE(self):
        path = urlparse(self.path).path
        if path.endswith(".cm"):
            return self.send_json(200, {"ok": True, "html": "", "items": [], "message": ""})
        return self.route_api("DELETE", path)

    def serve_static(self, path: str):
        # Support extensionless legacy routes and Imweb/wget query-like routes while
        # keeping normal static assets untouched.  Many mirrored controls use paths
        # such as /review.html/@q=... or /gold.html/@sort=...; those must render the
        # current list page instead of exposing a 404 page during coursework preview.
        site_dir = Path(self.server.site_dir)
        clean = unquote(path.lstrip("/"))
        target = site_dir / clean

        if path == "/":
            self.path = "/index.html"
        elif clean.endswith(".html/") and (site_dir / clean.rstrip("/")).exists():
            self.path = "/" + clean.rstrip("/")
        elif target.is_dir():
            self.path = path.rstrip("/") + "/index.html"
        elif not target.exists():
            fallback: Path | None = None
            clean_path = Path(clean)

            # /page.html/@q=... or /page.html/sort/... -> /page.html
            if ".html/" in clean:
                base = clean.split(".html/", 1)[0] + ".html"
                candidate = site_dir / base
                if candidate.exists():
                    fallback = candidate

            # /page.html@mode=... or /page.html? converted to @... -> /page.html
            if fallback is None and "@" in clean:
                base = clean.split("@", 1)[0].rstrip("/")
                if base.endswith(".html") and (site_dir / base).exists():
                    fallback = site_dir / base

            # /allgold/?sort=... or /FAQ/?category=... -> /allgold.html / FAQ.html
            stripped_clean = clean.rstrip("/")
            if fallback is None and stripped_clean and not Path(stripped_clean).suffix and (site_dir / f"{stripped_clean}.html").exists():
                fallback = site_dir / f"{stripped_clean}.html"

            # /FAQ, /NOTICE, /gold etc. -> /FAQ.html, /NOTICE.html, /gold.html
            if fallback is None and not clean_path.suffix and (site_dir / f"{clean}.html").exists():
                fallback = site_dir / f"{clean}.html"

            # /review/@q=... -> /review.html if present
            if fallback is None and "/@" in clean:
                base = clean.split("/@", 1)[0].rstrip("/")
                if base and (site_dir / f"{base}.html").exists():
                    fallback = site_dir / f"{base}.html"

            # Last-resort user-facing HTML fallback: never show a static 404 for
            # board pagination/sort/filter paths.  Do not fallback for real assets.
            if fallback is None and not clean_path.suffix:
                fallback = site_dir / "index.html"

            if fallback is not None and fallback.exists():
                self.path = "/" + fallback.relative_to(site_dir).as_posix()

        return super().do_GET()

    def route_api(self, method: str, path: str):
        try:
            if path == "/api/health" and method == "GET":
                with db() as conn:
                    conn.execute("SELECT 1")
                return self.send_json(200, {"ok": True, "db": str(DB_PATH)})
            if path == "/api/settings" and method == "GET":
                with db() as conn:
                    return self.send_json(200, {"ok": True, "settings": settings_dict(conn)})
            if path == "/api/auth/me" and method == "GET":
                return self.send_json(200, {"ok": True, "user": current_user(self)})
            if path == "/api/auth/login" and method == "POST":
                body = parse_body(self)
                email = str(body.get("email", "")).strip().lower()
                password = str(body.get("password", ""))
                with db() as conn:
                    row = conn.execute("SELECT * FROM users WHERE email=?", (email,)).fetchone()
                    if not row or not verify_password(password, row["password_hash"]):
                        return self.send_json(401, {"ok": False, "error": "invalid_credentials"})
                    token = secrets.token_urlsafe(32)
                    conn.execute("INSERT INTO sessions(token,user_id,created_at,expires_at) VALUES(?,?,?,?)", (token, row["id"], now(), now() + 60 * 60 * 24 * 7))
                    log_audit(conn, row["id"], "login", f"{email} 로그인", self.client_address[0])
                    cookie = f"{SESSION_COOKIE}={token}; Path=/; HttpOnly; SameSite=Lax; Max-Age={60*60*24*7}"
                    return self.send_json(200, {"ok": True, "user": row_user(row)}, cookie)
            if path == "/api/auth/logout" and method == "POST":
                token = get_cookie_token(self)
                if token:
                    with db() as conn:
                        conn.execute("DELETE FROM sessions WHERE token=?", (token,))
                return self.send_json(200, {"ok": True}, f"{SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0")
            if path == "/api/auth/register" and method == "POST":
                body = parse_body(self)
                email = str(body.get("email", "")).strip().lower()
                password = str(body.get("password", ""))
                name = str(body.get("name", "")).strip()
                phone = str(body.get("phone", "")).strip()
                if not email or "@" not in email or len(password) < 4 or not name:
                    return self.send_json(400, {"ok": False, "error": "invalid_register_form"})
                try:
                    with db() as conn:
                        cur = conn.execute(
                            "INSERT INTO users(email,password_hash,name,phone,role,created_at) VALUES(?,?,?,?,?,?)",
                            (email, hash_password(password), name, phone, "user", now()),
                        )
                        row = conn.execute("SELECT * FROM users WHERE id=?", (cur.lastrowid,)).fetchone()
                        token = secrets.token_urlsafe(32)
                        conn.execute("INSERT INTO sessions(token,user_id,created_at,expires_at) VALUES(?,?,?,?)", (token, row["id"], now(), now() + 60 * 60 * 24 * 7))
                        log_audit(conn, row["id"], "register", f"{email} 회원가입", self.client_address[0])
                        cookie = f"{SESSION_COOKIE}={token}; Path=/; HttpOnly; SameSite=Lax; Max-Age={60*60*24*7}"
                        return self.send_json(201, {"ok": True, "user": row_user(row)}, cookie)
                except sqlite3.IntegrityError:
                    return self.send_json(409, {"ok": False, "error": "email_exists"})
            if path == "/api/cart" and method == "GET":
                user = self.require_user()
                if not user: return
                with db() as conn:
                    return self.send_json(200, {"ok": True, "cart": cart_rows(conn, user["id"])})
            if path == "/api/cart/items" and method == "POST":
                user = self.require_user()
                if not user: return
                body = parse_body(self)
                pid = str(body.get("id", "")).strip()
                name = str(body.get("name", "")).strip() or "상품"
                price = max(0, int(body.get("price") or 0))
                qty = max(1, int(body.get("qty") or 1))
                href = str(body.get("href", ""))[:500]
                img = str(body.get("img", ""))[:500]
                if not pid:
                    return self.send_json(400, {"ok": False, "error": "product_id_required"})
                with db() as conn:
                    conn.execute(
                        """INSERT INTO cart_items(user_id,product_id,product_name,price,qty,href,img,updated_at)
                        VALUES(?,?,?,?,?,?,?,?)
                        ON CONFLICT(user_id,product_id) DO UPDATE SET
                        product_name=excluded.product_name, price=excluded.price,
                        qty=cart_items.qty+excluded.qty, href=excluded.href, img=excluded.img, updated_at=excluded.updated_at""",
                        (user["id"], pid, name, price, qty, href, img, now()),
                    )
                    return self.send_json(200, {"ok": True, "cart": cart_rows(conn, user["id"])})
            if path == "/api/cart/items" and method == "PUT":
                user = self.require_user()
                if not user: return
                body = parse_body(self)
                pid = str(body.get("id", "")).strip()
                qty = max(1, int(body.get("qty") or 1))
                with db() as conn:
                    conn.execute("UPDATE cart_items SET qty=?, updated_at=? WHERE user_id=? AND product_id=?", (qty, now(), user["id"], pid))
                    return self.send_json(200, {"ok": True, "cart": cart_rows(conn, user["id"])})
            if path == "/api/cart/items" and method == "DELETE":
                user = self.require_user()
                if not user: return
                body = parse_body(self)
                pid = str(body.get("id", "")).strip()
                with db() as conn:
                    conn.execute("DELETE FROM cart_items WHERE user_id=? AND product_id=?", (user["id"], pid))
                    return self.send_json(200, {"ok": True, "cart": cart_rows(conn, user["id"])})
            if path == "/api/cart/clear" and method == "POST":
                user = self.require_user()
                if not user: return
                with db() as conn:
                    conn.execute("DELETE FROM cart_items WHERE user_id=?", (user["id"],))
                    return self.send_json(200, {"ok": True, "cart": []})
            if path == "/api/orders" and method == "POST":
                user = self.require_user()
                if not user: return
                with db() as conn:
                    rows = list(conn.execute("SELECT * FROM cart_items WHERE user_id=?", (user["id"],)))
                    if not rows:
                        return self.send_json(400, {"ok": False, "error": "cart_empty"})
                    total = sum(int(r["price"]) * int(r["qty"]) for r in rows)
                    cur = conn.execute("INSERT INTO orders(user_id,total_amount,status,created_at) VALUES(?,?,?,?)", (user["id"], total, "created", now()))
                    oid = cur.lastrowid
                    for r in rows:
                        conn.execute("INSERT INTO order_items(order_id,product_id,product_name,price,qty,href,img) VALUES(?,?,?,?,?,?,?)", (oid, r["product_id"], r["product_name"], r["price"], r["qty"], r["href"], r["img"]))
                    conn.execute("DELETE FROM cart_items WHERE user_id=?", (user["id"],))
                    log_audit(conn, user["id"], "order_create", f"주문 #{oid} 생성 / {total}원", self.client_address[0])
                    items = [{"productId": r["product_id"], "productName": r["product_name"], "price": r["price"], "qty": r["qty"], "href": r["href"], "img": r["img"]} for r in rows]
                    return self.send_json(201, {"ok": True, "order": {"id": oid, "totalAmount": total, "status": "created", "items": items}})
            if path == "/api/admin/settings" and method == "PUT":
                admin = self.require_admin()
                if not admin: return
                body = parse_body(self)
                with db() as conn:
                    for k in DEFAULT_SETTINGS:
                        if k in body:
                            conn.execute("INSERT INTO site_settings(key,value,updated_at) VALUES(?,?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value, updated_at=excluded.updated_at", (k, str(body[k]), now()))
                    log_audit(conn, admin["id"], "settings_update", "사이트 설정 변경", self.client_address[0])
                    return self.send_json(200, {"ok": True, "settings": settings_dict(conn)})
            if path == "/api/admin/users" and method == "GET":
                if not self.require_admin(): return
                with db() as conn:
                    users = [row_user(r) for r in conn.execute("SELECT * FROM users ORDER BY created_at DESC LIMIT 100")]
                    return self.send_json(200, {"ok": True, "users": users})
            if path == "/api/admin/orders" and method == "GET":
                if not self.require_admin(): return
                with db() as conn:
                    orders = [dict(id=r["id"], email=r["email"], name=r["name"], totalAmount=r["total_amount"], status=r["status"], createdAt=r["created_at"]) for r in conn.execute("SELECT o.*,u.email,u.name FROM orders o JOIN users u ON u.id=o.user_id ORDER BY o.created_at DESC LIMIT 100")]
                    return self.send_json(200, {"ok": True, "orders": orders})
            if path.startswith("/api/admin/orders/") and method == "PUT":
                admin = self.require_admin()
                if not admin: return
                order_id = int(path.rsplit("/", 1)[-1])
                body = parse_body(self)
                status = str(body.get("status", "")).strip()
                allowed = {"created", "paid", "preparing", "shipping", "completed", "cancelled"}
                if status not in allowed:
                    return self.send_json(400, {"ok": False, "error": "invalid_order_status"})
                with db() as conn:
                    row = conn.execute("SELECT * FROM orders WHERE id=?", (order_id,)).fetchone()
                    if not row:
                        return self.send_json(404, {"ok": False, "error": "order_not_found"})
                    conn.execute("UPDATE orders SET status=? WHERE id=?", (status, order_id))
                    log_audit(conn, admin["id"], "order_status_update", f"주문 #{order_id} 상태 변경: {row['status']} -> {status}", self.client_address[0])
                    updated = conn.execute("SELECT * FROM orders WHERE id=?", (order_id,)).fetchone()
                    return self.send_json(200, {"ok": True, "order": {"id": updated["id"], "totalAmount": updated["total_amount"], "status": updated["status"], "createdAt": updated["created_at"]}})
            if path == "/api/admin/audit-logs" and method == "GET":
                if not self.require_admin(): return
                with db() as conn:
                    logs = [dict(id=r["id"], actorEmail=r["email"], action=r["action"], detail=r["detail"], ip=r["ip"], createdAt=r["created_at"]) for r in conn.execute("SELECT a.*,u.email FROM audit_logs a LEFT JOIN users u ON u.id=a.actor_user_id ORDER BY a.created_at DESC, a.id DESC LIMIT 100")]
                    return self.send_json(200, {"ok": True, "logs": logs})
            if path == "/api/admin/backup" and method == "GET":
                admin = self.require_admin()
                if not admin: return
                backup_dir = ROOT / "backups"
                backup_dir.mkdir(parents=True, exist_ok=True)
                filename = f"yeouidogold-backup-{time.strftime('%Y%m%d-%H%M%S')}.sqlite3"
                backup_path = backup_dir / filename
                with db() as conn:
                    log_audit(conn, admin["id"], "backup_download", filename, self.client_address[0])
                with db() as source:
                    dst = sqlite3.connect(backup_path)
                    source.backup(dst)
                    dst.close()
                return self.send_binary(200, backup_path.read_bytes(), filename)
            return self.send_json(404, {"ok": False, "error": "not_found"})
        except json.JSONDecodeError:
            return self.send_json(400, {"ok": False, "error": "invalid_json"})
        except Exception as e:
            print("API error:", repr(e), file=sys.stderr)
            return self.send_json(500, {"ok": False, "error": "server_error"})


class Server(ThreadingHTTPServer):
    def __init__(self, addr, handler, site_dir: Path):
        self.site_dir = site_dir
        super().__init__(addr, handler)


def main(argv=None):
    parser = argparse.ArgumentParser()
    parser.add_argument("--site", default=str(DEFAULT_SITE), help="static site directory")
    parser.add_argument("--host", default=os.environ.get("YG_HOST", "127.0.0.1"))
    parser.add_argument("--port", type=int, default=int(os.environ.get("YG_PORT", "8099")))
    args = parser.parse_args(argv)
    init_db()
    server = Server((args.host, args.port), Handler, Path(args.site).resolve())
    print(f"Yeouido Gold DB server: http://{args.host}:{args.port}  db={DB_PATH}", flush=True)
    server.serve_forever()


if __name__ == "__main__":
    main()
