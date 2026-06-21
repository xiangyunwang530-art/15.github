# 部署指南

本文件提供多種部署方式，您可根據需求選擇。

## 方式 1：直接使用編譯後的 HTML（最簡單）

1. 下載 `index_final_fixed.html`
2. 將其重命名為 `index.html`
3. 上傳至您的伺服器根目錄
4. 訪問 `https://your-domain.com/` 即可

**優點**：無需構建，直接使用
**缺點**：無法修改源代碼

---

## 方式 2：使用 GitHub Pages（推薦）

### 步驟 1：Fork 或克隆此倉庫

```bash
git clone https://github.com/your-username/ai-logistics-report.git
cd ai-logistics-report
```

### 步驟 2：安裝依賴

```bash
pnpm install
```

### 步驟 3：構建項目

```bash
pnpm build
```

### 步驟 4：部署至 GitHub Pages

1. 在 GitHub 上創建新倉庫 `ai-logistics-report`
2. 推送代碼至 `main` 分支
3. 在倉庫設置中啟用 GitHub Pages
4. 選擇 `main` 分支作為源
5. 訪問 `https://your-username.github.io/ai-logistics-report/`

---

## 方式 3：使用 Vercel（推薦）

### 步驟 1：連接 GitHub

1. 訪問 [Vercel](https://vercel.com)
2. 使用 GitHub 帳號登入
3. 點擊「New Project」

### 步驟 2：導入項目

1. 選擇此倉庫
2. 點擊「Import」

### 步驟 3：配置設置

- **Framework**：Vite
- **Build Command**：`pnpm build`
- **Output Directory**：`dist`

### 步驟 4：部署

1. 點擊「Deploy」
2. 等待部署完成
3. 訪問提供的 URL

---

## 方式 4：使用 Netlify

### 步驟 1：連接 GitHub

1. 訪問 [Netlify](https://netlify.com)
2. 點擊「New site from Git」
3. 選擇 GitHub

### 步驟 2：配置設置

- **Build Command**：`pnpm build`
- **Publish Directory**：`dist`

### 步驟 3：部署

1. 點擊「Deploy site」
2. 等待部署完成

---

## 方式 5：使用 Docker

### 建立 Dockerfile

```dockerfile
FROM node:22-alpine

WORKDIR /app

# 安裝 pnpm
RUN npm install -g pnpm

# 複製檔案
COPY . .

# 安裝依賴
RUN pnpm install

# 構建
RUN pnpm build

# 使用輕量級 HTTP 伺服器
FROM node:22-alpine
RUN npm install -g serve
COPY --from=0 /app/dist /app/dist
WORKDIR /app
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

### 構建並運行

```bash
docker build -t ai-logistics-report .
docker run -p 3000:3000 ai-logistics-report
```

訪問 `http://localhost:3000`

---

## 方式 6：使用傳統伺服器（Apache/Nginx）

### Nginx 配置

```nginx
server {
    listen 80;
    server_name your-domain.com;

    root /var/www/ai-logistics-report;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 快取靜態資源
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### 部署步驟

1. 執行 `pnpm build`
2. 將 `dist/` 目錄複製至 `/var/www/ai-logistics-report`
3. 重啟 Nginx：`sudo systemctl restart nginx`

### Apache 配置

在 `.htaccess` 中添加：

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 環境變數配置

如需自訂分析或其他服務，編輯 `.env` 檔案：

```env
VITE_ANALYTICS_ENDPOINT=https://your-analytics.com
VITE_ANALYTICS_WEBSITE_ID=your-id
```

---

## 常見問題

### Q：如何修改 PDF 連結？

編輯 `client/src/components/Slides.tsx` 中的 `PPTPresentation` 函數：

```typescript
const pdfUrl = 'https://your-pdf-url.com/file.pdf';
```

### Q：如何修改簡報內容？

編輯 `client/src/components/Slides.tsx` 中的各個幻燈片組件。

### Q：如何修改配色？

編輯 `client/src/index.css` 中的 CSS 變數：

```css
:root {
  --neon-pink: #FF007F;
  /* ... 其他顏色 */
}
```

---

## 支援

如有問題，歡迎提交 Issue 或聯繫開發者。
