# AI 時代物流行銷典範轉移報告

完整的 React + Tailwind CSS 網站，展示 AI 物流行銷的典範轉移。採用漸層銀色背景與霓粉紅色字體的現代設計風格。

## 功能特色

- **10 個簡報幻燈片**：涵蓋物流行銷的各個面向
- **YouTube 影片整合**：直接嵌入推薦影片
- **完整 PDF 查看器**：支援線上瀏覽 PowerPoint 簡報
- **響應式設計**：支援各種螢幕尺寸
- **現代設計風格**：漸層銀色背景 + 霓粉紅色字體

## 技術棧

- **前端框架**：React 19 + TypeScript
- **樣式**：Tailwind CSS 4 + 自訂 CSS
- **字體**：Orbitron (標題) + Noto Sans TC (正文)
- **構建工具**：Vite
- **路由**：Wouter
- **UI 組件**：shadcn/ui

## 快速開始

### 安裝依賴

```bash
pnpm install
```

### 開發模式

```bash
pnpm dev
```

訪問 `http://localhost:3000` 查看網站。

### 生產構建

```bash
pnpm build
```

編譯後的檔案位於 `dist/` 目錄。

## 專案結構

```
client/
  ├── public/              # 靜態資源
  ├── src/
  │   ├── components/      # React 組件
  │   │   ├── Sidebar.tsx      # 左側導航菜單
  │   │   ├── Slides.tsx       # 簡報幻燈片與 PDF 查看器
  │   │   └── ...
  │   ├── pages/           # 頁面組件
  │   │   └── Home.tsx         # 首頁
  │   ├── App.tsx          # 應用入口
  │   ├── main.tsx         # React 入口
  │   └── index.css        # 全域樣式
  └── index.html           # HTML 模板
```

## 色彩配置

- **背景**：漸層銀色（#E8E8E8 → #C0C0C0）
- **主要文字**：霓粉紅色 (#FF007F)
- **邊框**：霓粉紅色 (#FF007F)

## 部署

### Manus 平台部署

1. 點擊「Publish」按鈕
2. 選擇自訂域名或使用預設域名
3. 完成部署

### 其他平台部署

1. 執行 `pnpm build`
2. 將 `dist/` 目錄上傳至伺服器
3. 配置伺服器以支援客戶端路由

## 內容編輯

### 修改簡報內容

編輯 `client/src/components/Slides.tsx` 中的各個幻燈片組件。

### 修改導航菜單

編輯 `client/src/components/Sidebar.tsx` 中的菜單項目。

### 修改 PDF 連結

編輯 `client/src/components/Slides.tsx` 中的 `PPTPresentation` 函數，更新 `pdfUrl` 變數。

## 推薦影片

頁面下方包含 5 部推薦影片，用戶可點擊卡片直接跳轉至 YouTube 觀看。

## 瀏覽器支援

- Chrome/Edge (最新版本)
- Firefox (最新版本)
- Safari (最新版本)

## 許可證

MIT

## 聯繫方式

如有問題或建議，歡迎提交 Issue 或 Pull Request。

---

**最後更新**：2026 年 6 月 20 日
