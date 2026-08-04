# 部署指南

## 🚀 用 GitHub Pages 部署（推薦）

### 步驟 1：啟用 GitHub Pages

1. 前往 https://github.com/alibabaamyh-cmyk/ai_prompt/settings
2. 左側選單 → **Pages**
3. 在 "Build and deployment" 中：
   - **Source** 選擇 "Deploy from a branch"
   - **Branch** 選擇 "main"
   - **Folder** 選擇 "/ (root)"
4. 點擊 **Save**

### 步驟 2：等待部署完成

GitHub 會自動構建你的網站，通常需要 1-2 分鐘。

### 步驟 3：訪問你的網站

部署完成後，你會看到一個 URL，類似：
```
https://alibabaamyh-cmyk.github.io/ai_prompt/
```

**商家現在可以使用此 URL 訪問平台！**

---

## ✅ 驗證部署

1. 訪問上面的 URL
2. 應該看到 AI Prompt 平台首頁
3. 嘗試：
   - 選擇一個商家類型
   - 填表格並生成 Prompt
   - 訪問 Prompt 庫並複製 Prompt

---

## 🔗 分享給商家

部署後，分享這個 URL 給商家：

```
https://alibabaamyh-cmyk.github.io/ai_prompt/
```

或者建立一個短連結指向這個 URL。

---

## 📝 更新部署

如果你在本地修改了代碼：

```bash
cd ai_prompt
git add .
git commit -m "Update prompts/styles/features"
git push origin main
```

GitHub Pages 會自動重新部署（通常 1-2 分鐘）。

---

## 🛠️ 本地測試

如果想在部署前本地測試：

### 使用 Python（推薦）
```bash
cd ai_prompt/web
python3 -m http.server 8000
```

然後訪問 http://localhost:8000

### 使用 Node.js
```bash
npm install -g http-server
cd ai_prompt/web
http-server
```

---

## ⚠️ 常見問題

### Q：頁面無法加載
A：檢查 GitHub Pages 設定是否啟用。等待 1-2 分鐘讓 GitHub 完成構建。

### Q：樣式或圖片不顯示
A：這是路徑問題。確保：
- 所有相對路徑使用 `./` 或 `../`
- 檔案名稱完全匹配（區分大小寫）

### Q：能否自定義域名？
A：可以。在 GitHub Pages 設定中，你可以添加自定義域名（如 prompts.yourdomain.com）

---

## 📊 部署狀態檢查

訪問 https://github.com/alibabaamyh-cmyk/ai_prompt/deployments 查看部署歷史和狀態。

---

**部署完成後，商家就可以直接訪問 URL 使用平台了！**
