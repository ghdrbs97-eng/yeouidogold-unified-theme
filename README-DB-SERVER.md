# 여의도 금거래소 DB 운영형 과제 서버

이 패키지는 기존 정적 클론에 Python 표준 라이브러리 기반 서버와 SQLite DB를 추가한 버전입니다.

## 실행

```bash
cd yeouidogold-full-mirror
python3 server.py --site site --port 8099
```

브라우저에서 접속:

- 홈페이지: http://127.0.0.1:8099/
- 관리자: http://127.0.0.1:8099/admin.html
- 로그인: http://127.0.0.1:8099/login.html

## 관리자 계정

- ID: `admin@yeouidogold.com`
- PW: `admin1234`

환경변수로 변경 가능:

```bash
YG_ADMIN_EMAIL=admin@example.com YG_ADMIN_PASSWORD='새비밀번호' python3 server.py --site site --port 8099
```

## DB 위치

기본 DB 파일:

```text
data/yeouidogold.sqlite3
```

환경변수로 변경 가능:

```bash
YG_DB_PATH=/absolute/path/yeouidogold.sqlite3 python3 server.py --site site --port 8099
```

## DB에 저장되는 기능

- 회원가입/로그인/세션
- 관리자 계정
- 장바구니
- 주문 생성
- 주문 상태 변경(접수/결제확인/준비중/배송중/완료/취소)
- 관리자 사이트 설정
- 최근 회원/주문 조회
- 운영 감사 로그(audit logs)
- SQLite DB 백업 다운로드

## 운영 보강 사항

- 비밀번호는 평문이 아니라 PBKDF2-SHA256 해시로 저장됩니다.
- 로그인은 HttpOnly/SameSite 세션 쿠키로 관리됩니다.
- 관리자 API는 role=admin 권한 검사를 통과해야 실행됩니다.
- 모든 API 응답과 정적 파일 응답에 기본 보안 헤더를 추가했습니다.
  - `X-Frame-Options: DENY`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- 관리자 백업 파일은 `backups/` 폴더에도 생성됩니다.

## 테스트

```bash
python3 -m unittest tests.test_backend_api -v
```
