#!/usr/bin/env python3
"""Build local client-side review pagination data from the public YeouidoGold review board."""
from __future__ import annotations

import html as html_lib
import json
import re
import sys
import time
from pathlib import Path
from urllib.parse import urljoin, urlparse, unquote

import requests
from lxml import html

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "site"
OUT = SITE / "review-pages-data.js"
ORIGIN = "https://yeouidogold.com"
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125 Safari/537.36"

session = requests.Session()
session.headers.update({"User-Agent": UA, "Accept-Language": "ko-KR,ko;q=0.9,en;q=0.8"})


def class_contains(name: str) -> str:
    return f"contains(concat(' ',normalize-space(@class),' '),' {name} ')"


def local_asset_url(url: str, base_url: str) -> str:
    url = html_lib.unescape(url.strip().strip('"\''))
    if not url or url.startswith("data:") or url.startswith("javascript:") or url.startswith("#"):
        return url
    abs_url = urljoin(base_url, url)
    parsed = urlparse(abs_url)
    if parsed.netloc and not (parsed.netloc.endswith("yeouidogold.com") or parsed.netloc.endswith("imweb.me")):
        return abs_url
    path = unquote(parsed.path.lstrip("/"))
    if not path:
        return url
    # CDN optimized/original files map cleanly into the local mirrored path.
    # Query-string variants are rare on review snippets; preserve only in filename if present.
    if parsed.query:
        safe_q = re.sub(r"[^A-Za-z0-9._=-]+", "_", parsed.query)[:80]
        path = f"{path}@{safe_q}"
    target = SITE / path
    if not target.exists() or target.stat().st_size == 0:
        target.parent.mkdir(parents=True, exist_ok=True)
        try:
            resp = session.get(abs_url, timeout=30)
            if resp.status_code == 200 and resp.content:
                target.write_bytes(resp.content)
        except Exception as exc:
            print(f"WARN download failed {abs_url}: {exc}", file=sys.stderr)
    return path.replace('\\', '/')


def rewrite_snippet(snippet: str, base_url: str) -> str:
    # Remove origin-only view links and keep local board pagination/detail clicks on review.html.
    snippet = html_lib.unescape(snippet)
    snippet = re.sub(r'href="/shop_view/', 'href="shop_view/', snippet)
    snippet = re.sub(r"href='/shop_view/", "href='shop_view/", snippet)
    snippet = re.sub(r'href="https://yeouidogold\.com/shop_view/', 'href="shop_view/', snippet)
    snippet = re.sub(r"href='https://yeouidogold\.com/shop_view/", "href='shop_view/", snippet)
    snippet = re.sub(r'href="(?:https://yeouidogold\.com)?/review/[^\"]*"', 'href="review.html"', snippet)
    snippet = re.sub(r"href='(?:https://yeouidogold\.com)?/review/[^']*'", "href='review.html'", snippet)

    def repl_src(m: re.Match[str]) -> str:
        attr, quote, url = m.group(1), m.group(2), m.group(3)
        return f"{attr}={quote}{local_asset_url(url, base_url)}{quote}"

    snippet = re.sub(r'\b(src|data-src|data-original)=("|\')([^"\']+)(\2)', lambda m: f"{m.group(1)}={m.group(2)}{local_asset_url(m.group(3), base_url)}{m.group(2)}", snippet)

    def repl_url(m: re.Match[str]) -> str:
        raw = m.group(1).strip().strip('"\'')
        return f"url({local_asset_url(raw, base_url)})"

    snippet = re.sub(r'url\(([^)]+)\)', repl_url, snippet)
    return snippet


def fetch_page(page: int) -> tuple[list[str], list[int], int | None, bool]:
    url = f"{ORIGIN}/review/" if page == 1 else f"{ORIGIN}/review/?page={page}"
    resp = session.get(url, timeout=30)
    resp.raise_for_status()
    doc = html.fromstring(resp.text)
    cards = doc.xpath(f"//*[{class_contains('list-style-card')} and {class_contains('_card_wrap')}]")
    snippets = [rewrite_snippet(html.tostring(c, encoding='unicode', method='html'), resp.url) for c in cards]
    pages: list[int] = []
    for a in doc.xpath(f"//*[{class_contains('paging-block')}]//a"):
        text = ' '.join(a.text_content().split())
        if text.isdigit():
            pages.append(int(text))
    active_el = doc.xpath(f"//*[{class_contains('paging-block')}]//li[{class_contains('active')}]/a")
    active = int(active_el[0].text_content().strip()) if active_el and active_el[0].text_content().strip().isdigit() else None
    next_link = any("Next" in ' '.join(a.text_content().split()) or (a.get('aria-label') or '') == 'Next' for a in doc.xpath(f"//*[{class_contains('paging-block')}]//a[not(contains(@class,'disabled'))]"))
    return snippets, pages, active, next_link


def main() -> None:
    all_pages: list[list[str]] = []
    page = 1
    seen_last = 0
    while True:
        snippets, nums, active, has_next = fetch_page(page)
        if active is not None and active != page and page > max(nums or [0]):
            break
        if not snippets:
            break
        all_pages.append(snippets)
        seen_last = max(seen_last, max(nums or [page]), active or page)
        print(f"page {page}: cards={len(snippets)} active={active} nav={nums[:1]}..{nums[-1:]}")
        if not has_next and page >= seen_last:
            break
        page += 1
        if page > 200:
            raise SystemExit("safety stop: too many review pages")
        time.sleep(0.08)
    payload = {
        "generatedFrom": ORIGIN + "/review/",
        "pageCount": len(all_pages),
        "perPage": max((len(p) for p in all_pages), default=25),
        "pages": all_pages,
    }
    OUT.write_text("window.YG_REVIEW_PAGES = " + json.dumps(payload, ensure_ascii=False, separators=(',', ':')) + ";\n", encoding="utf-8")
    print(f"WROTE {OUT} pages={len(all_pages)} cards={sum(len(p) for p in all_pages)} bytes={OUT.stat().st_size}")


if __name__ == "__main__":
    main()
