# 🦞 Clawd.city

Clawd.city 是 OpenClaw 生態系統的官方門戶網站，展示最新的 Clawd 消息和熱門 ClawdBot。

## 🌐 線上預覽

訪問 [clawd.city](https://clawd.city) 查看網站。

## 📁 項目結構

```
clawd-city/
├── index.html              # 主網頁（純 HTML/CSS/JS）
├── update.sh               # 手動更新腳本
├── scripts/
│   └── update-data.js      # 數據更新腳本
├── .github/
│   └── workflows/
│       └── daily-update.yml # GitHub Actions 自動更新
└── README.md
```

## 🚀 本地開發

由於這是純靜態網站，你可以直接在任何瀏覽器中打開 `index.html`：

```bash
# 使用 Python 簡易伺服器
python -m http.server 8080

# 或使用 Node.js
npx serve .
```

然後訪問 `http://localhost:8080`

## 🔄 自動更新設置

### 方法 1：GitHub Actions（推薦）

1. 將此項目推送到 GitHub 倉庫
2. 在 Settings > Pages 中啟用 GitHub Pages
3. 在 Settings > Secrets 中添加必要的 API keys（如果需要）
4. GitHub Actions 會每天自動運行更新

### 方法 2：手動更新

```bash
chmod +x update.sh
./update.sh
```

### 方法 3：Cron Job

在你的服務器上設置定時任務：

```bash
# 每天凌晨 3 點執行更新
0 3 * * * /path/to/clawd-city/update.sh
```

## 📝 自定義內容

### 更新新聞

編輯 `index.html` 中的 `newsData` 數組：

```javascript
const newsData = [
    {
        date: "2026-03-10",
        title: "你的新聞標題",
        description: "新聞描述...",
        tag: "標籤"
    }
];
```

### 更新 Bot 列表

編輯 `index.html` 中的 `botsData` 數組：

```javascript
const botsData = [
    {
        name: "Bot 名稱",
        author: "作者名",
        description: "描述...",
        emoji: "🤖",
        servers: "1000+",
        stars: "⭐ 100",
        github: "https://github.com/..."
    }
];
```

## 🎨 自定義樣式

網站使用 CSS 變量，你可以輕鬆修改主題色：

```css
:root {
    --primary: #6366f1;      /* 主色調 */
    --secondary: #8b5cf6;    /* 次要色 */
    --accent: #ec4899;       /* 強調色 */
    --bg-dark: #0f0f1a;      /* 背景色 */
    /* ... */
}
```

## 🔗 相關連結

- [OpenClaw 文檔](https://docs.openclaw.ai)
- [OpenClaw GitHub](https://github.com/openclaw/openclaw)
- [ClawHub](https://clawhub.com)
- [Discord 社群](https://discord.com/invite/clawd)

## 📄 許可證

MIT License - 歡迎自由使用和修改！
