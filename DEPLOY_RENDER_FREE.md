# 무료 외부 배포 가이드 — Render 기준

이 프로젝트는 Python 표준 라이브러리 기반 서버(`server.py`)와 SQLite DB를 사용합니다. 정렬/장바구니/로그인/관리자 기능이 있으므로 GitHub Pages, Netlify Static 같은 정적 호스팅만으로는 동작하지 않습니다. 무료로 외부 접속 가능한 데모를 만들려면 Render Free Web Service가 가장 간단합니다.

## 1. 준비된 파일

이미 아래 파일이 포함되어 있습니다.

- `Dockerfile` — Render가 컨테이너로 실행할 설정
- `render.yaml` — Render Blueprint 배포 설정
- `.dockerignore` — ZIP/로그/캐시 제외

Render 실행 명령은 다음과 같습니다.

```bash
python3 server.py --site site --host 0.0.0.0 --port ${PORT:-8099}
```

## 2. GitHub에 업로드

Render는 보통 GitHub 저장소를 연결해서 배포합니다.

```bash
cd /home/hong/yeouidogold-full-mirror
git init
git add .
git commit -m "Deploy Yeouido Gold unified theme site"
```

그 다음 GitHub에서 새 저장소를 만들고, 화면에 나오는 명령대로 push 합니다. 예:

```bash
git remote add origin https://github.com/내아이디/yeouidogold-unified-theme.git
git branch -M main
git push -u origin main
```

주의: 이 프로젝트는 이미지가 많아 용량이 큽니다. GitHub 웹 업로드보다는 `git push`를 권장합니다. 만약 GitHub가 100MB 초과 단일 파일을 거부하면, 해당 큰 파일을 찾아 제거하거나 Git LFS를 사용해야 합니다.

## 3. Render에서 무료 웹서비스 생성

1. https://render.com 접속 후 회원가입/로그인
2. Dashboard → New + → Web Service
3. GitHub 저장소 연결
4. 설정
   - Runtime: Docker
   - Plan: Free
   - Branch: main
   - Root Directory: 비워둠
   - Build Command: 비워둠
   - Start Command: Dockerfile 사용이므로 비워둠
5. Create Web Service 클릭

배포가 끝나면 Render가 다음 형태의 공개 URL을 줍니다.

```text
https://yeouidogold-unified-theme.onrender.com
```

## 4. 접속/테마 전환

배포 후 오른쪽 상단 드롭다운에서 선택할 수 있습니다.

- 일반
- 카톡

URL 파라미터로도 강제할 수 있습니다.

```text
https://...onrender.com/index.html?theme=normal
https://...onrender.com/index.html?theme=kakao
https://...onrender.com/shop_view/340.html?theme=kakao
```

## 5. 무료 배포 한계

Render 무료 웹서비스는 데모/과제 제출용으로 적합하지만 다음 제한이 있습니다.

- 일정 시간 접속이 없으면 sleep 상태가 될 수 있어 첫 접속이 느릴 수 있습니다.
- SQLite DB는 컨테이너 내부 파일을 사용하므로 무료 환경에서는 재배포/재시작 시 데이터 영속성이 완벽하지 않을 수 있습니다.
- 과제 제출용 데모에는 충분하지만, 실제 운영 서비스라면 유료 디스크 또는 외부 DB(PostgreSQL/Supabase 등)로 바꾸는 것이 안전합니다.

## 6. 로컬 검증 명령

배포 전 로컬에서 같은 방식으로 실행하려면:

```bash
cd /home/hong/yeouidogold-full-mirror
PORT=8099 YG_HOST=0.0.0.0 YG_DB_PATH=data/yeouidogold.sqlite3 \
python3 server.py --site site --host 0.0.0.0 --port ${PORT:-8099}
```

검증:

```bash
curl -I http://127.0.0.1:8099/index.html?theme=kakao
curl -I http://127.0.0.1:8099/kakao-style.css
```
