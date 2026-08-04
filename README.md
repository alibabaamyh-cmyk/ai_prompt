# 🎯 AI Prompt 集合平台

為台灣商家快速生成國際站營銷文案與產品主圖的 AI Prompt 集合平台。

## 📋 核心場景

### 1. 🏪 旺舖定位建議
- **用戶輸入**：商家優勢、主營商品、目標市場
- **輸出**：定制化的旺舖風格定位 Prompt
- **應用**：幫助商家撰寫旺舖首頁和店鋪描述

### 2. 📝 商品詳情頁 Prompt
- **用戶輸入**：商品名稱、特色、賣點、競爭優勢
- **輸出**：切中買方市場、有競爭力的詳情頁 Prompt
- **應用**：生成吸引力強的商品詳情文案

### 3. 🖼️ 產品主圖 Prompt
- **用戶輸入**：商品類別、風格偏好
- **輸出**：符合國際站風格（900×900）的產品主圖 Prompt
- **應用**：批量生成視覺上統一的產品主圖

### 4. 📊 資料結構化 Prompt
- **用戶輸入**：上傳 Excel/PDF 檔案
- **輸出**：結構化整理 Prompt（分類、標題、關鍵字、規格、描述）
- **應用**：工廠/貿易商快速整理產品資料庫

## 🗂️ 目錄結構

```
ai_prompt/
├── README.md                    # 本文件
├── web/                         # 前端頁面
│   ├── index.html              # 主頁
│   ├── scenarios/               # 各場景頁面
│   │   ├── shop-positioning.html
│   │   ├── product-detail.html
│   │   ├── product-image.html
│   │   └── data-structuring.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── app.js
├── prompts/                     # Prompt 庫
│   ├── shop-positioning/        # 旺舖定位
│   ├── product-detail/          # 商品詳情
│   ├── product-image/           # 產品主圖
│   └── data-structuring/        # 資料結構化
├── scenarios/                   # 商家情境配置
│   └── scenarios.json           # 情境定義
└── docs/                        # 文檔
    ├── SETUP.md                 # 設置指南
    └── PROMPTS.md               # Prompt 設計指南
```

## 🚀 快速開始

1. **查看平台** — 打開 `web/index.html`
2. **選擇場景** — 根據你的商家類型選擇
3. **填表格** — 輸入相關信息
4. **複製 Prompt** — 獲得定制化的 Prompt
5. **使用 Prompt** — 在 Claude 或其他 AI 工具中使用

## 🎨 支持的商家類型

- [ ] 品牌商家
- [ ] 工廠/製造商
- [ ] 貿易商/代理商
- [ ] 中小企業主
- [ ] 個人賣家

## 📝 計畫中的功能

- [ ] 多語言支持（中文、英文、日文）
- [ ] Prompt 版本管理
- [ ] 用戶反饋系統
- [ ] Prompt 效果追蹤
- [ ] 批量生成
- [ ] 與 Notion/阿里後台的集成

## 📄 License

MIT

---

**製作者**：Amy Studio 阿里巴巴專案組  
**最後更新**：2026-08-05
