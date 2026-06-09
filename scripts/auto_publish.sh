#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

MESSAGE="${1:-Auto publish site updates}"

python3 -m py_compile server.py
if [ -f site/original-ui.js ]; then
  node --check site/original-ui.js
fi
if [ -f site/js/site_shop/site_shop.js ]; then
  node --check site/js/site_shop/site_shop.js
fi
python3 -m unittest tests/test_backend_api.py -v

# Do not commit mutable/generated runtime files unless the user explicitly stages them.
git restore data/yeouidogold.sqlite3 backups 2>/dev/null || true
git ls-files -z '*__pycache__*' '*.pyc' | xargs -0 -r git checkout --
git add .gitignore .github server.py Dockerfile render.yaml .dockerignore DEPLOY_RENDER_FREE.md site scripts tests 2>/dev/null || true
git restore --staged data/yeouidogold.sqlite3 backups '*__pycache__*' '*.pyc' 2>/dev/null || true

if git diff --cached --quiet; then
  echo "No staged publishable changes."
else
  git commit -m "$MESSAGE"
fi

git push origin main

if [ -n "${RENDER_DEPLOY_HOOK_URL:-}" ]; then
  curl -fsS -X POST "$RENDER_DEPLOY_HOOK_URL"
  echo
  echo "Triggered Render deploy hook."
else
  echo "Pushed to GitHub. If Render Auto Deploy is enabled, Render will deploy automatically."
  echo "To force deploy via hook, set RENDER_DEPLOY_HOOK_URL before running this script."
fi
