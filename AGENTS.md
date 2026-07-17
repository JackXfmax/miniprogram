# AGENTS.md

## Tech stack

- **Native WeChat Mini Program** — no framework, no npm, no TypeScript, no bundler.
- Pure JS + WXML + WXSS. Development through **WeChat DevTools** (`Ctrl+B` to build) only.
- No `package.json`, no lint, no tests, no typecheck.

## Dev workflow

1. Start the OCR proxy: run `start-server.bat` (or `node proxy-server.js`), which listens on port 3000 and forwards to `http://mtocr.utibet.edu.cn:8000/ocr`.
2. Open the project folder in WeChat DevTools.
3. Press `Ctrl+B` to compile and launch.

The proxy uses only Node.js built-in modules (`http`, `https`). No `npm install` needed.

## App entry & structure

- **App entry:** `app.js` — sets `globalData` (API URLs, token, storage key prefixes).
- **Page routing:** registered in `app.json` → 12 pages under `pages/`.
- **Custom tab bar:** `custom-tab-bar/` replaces the native one. 5 tabs: 首页, 识别(recognize), 迁移(migrate), 文创(calligraphy), 我的(mine).
- **Shared styles:** `common/common.wxss` (card/guide/button classes).
- **Shared behavior:** `common/guide-behavior.js` (collapsible guide toggle for pages).

## API & networking

- OCR API URL is defined in `app.js:globalData.ocrApiUrl` (default `http://localhost:3000/ocr` → proxies to `http://mtocr.utibet.edu.cn:8000/ocr`).
- If the proxy isn't running, OCR calls will fail. There's a debug page at `pages/debug/debug` for diagnosing connectivity.
- The miniprogram requires HTTPS for `wx.request`; the local proxy on `localhost:3000` solves this during development.

## Demo mode

- Many features (style migration, AI generation) have **mock/demo paths** using pre-generated images from `images/styles/` and simulated progress bars.
- Useful for UI testing when the backend is unavailable. See `演示模式说明.md` for details.

## Data & storage

- **All user data stored locally** via `wx.StorageSync` — history, stats, practice progress, orders. No cloud backend.
- `app.js` provides `addStat()` and `addRecentActivity()` helpers for centralized state updates.

## Canvas quirks

- Two Canvas APIs coexist: **`Canvas type="2d"`** (primary) with fallback to `wx.createCanvasContext()` (legacy).
- This affects pages like `practice`, `shop`, `migrate`, and `denoise`. When modifying Canvas code, keep both paths functional.

## Project config notes

- `project.config.json` `packOptions.ignore` excludes `*.md`, `*.bat`, `proxy-server.js`, `scripts/` — these are not uploaded to WeChat.
- `project.private.config.json` has per-developer settings (skyline disabled, URL check disabled).
