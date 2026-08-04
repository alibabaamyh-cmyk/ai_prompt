# 阿里國際站 - 六圖完整框架指南

## 概述

這是一個針對阿里巴巴國際站（及其他 B2B/B2C 平台）優化的商品圖片生成系統。基於實戰經驗，涵蓋：

- **2 個行業框架** — B2B 工業品 / 消費品
- **6 種圖片類型** — 從吸引到成交的完整路徑
- **3 種視覺風格** — 適應不同買家審美
- **完整的 Prompt 模板** — 即用型，可直接用於 ChatGPT/Midjourney

---

## 核心邏輯：購買者心理旅程

```
圖1 (主圖)      圖2 (痛點)      圖3 (理由)      圖4 (應用)      圖5 (PK)       圖6 (背書)
   ↓              ↓              ↓              ↓              ↓              ↓
吸引注意         共鳴           展示希望        證明價值        確認優勢        消除疑慮
(美感)          (痛感)          (信心)          (可行性)        (競爭力)       (信任度)
```

**完整故事線：**
> 「嗯，這個產品看起來不錯（圖1）。等等，我最大的問題不就是這個嗎？（圖2）。原來他們能解決！（圖3）。我看看能怎麼用（圖4）。他們的質量比別人好這麼多（圖5）。而且公司看起來很專業（圖6）。我買了！」

---

## 框架 A：B2B 工業品

### 適用產品
- 模具、機械、五金、電子零件、建材、化工、設備
- 目標買家：工廠、採購方、企業
- 價格點：通常 $1,000+ / 單位

### 核心目標
**用數據和技術背書建立信任，消除採購風險**

### 三種視覺風格選擇

#### 風格 A - 專業冷調工業風 ❄️
- **色調**：深灰 (#1F3A5F)、金屬銀、安全橙 (#FF6F00)
- **背景**：工廠環境、金屬台面、深色無縫背景
- **字體**：Montserrat Bold（粗體、有力）
- **適合買家**：歐洲、日韓採購方
- **感覺**：高冷、專業、技術感強、不容妥協
- **何時使用**：出口歐洲/日本、高端精密產品

#### 風格 B - 乾淨簡約商務風 ✨
- **色調**：白、淺灰、深藍點綴
- **背景**：白色無縫背景、簡潔商務環境
- **字體**：Montserrat Bold
- **適合買家**：北美買家、全球通用
- **感覺**：現代、高效、專業、值得信賴
- **何時使用**：全球市場、通用產品、想要現代感

#### 風格 C - 場景化情境風 🏭
- **色調**：自然光暖調、工廠環境色
- **背景**：實際生產線、工廠現場
- **字體**：Inter（簡潔、友好）
- **適合買家**：想看真實工廠環境的買家
- **感覺**：透明、實在、工藝可見、沒有隱瞞
- **何時使用**：想展示生產能力、強調本地生產

### B2B 工業品的六張圖片詳解

#### 圖1：產品主圖 (Hero Shot)
**目的**：第一眼抓住買家的注意力，清楚展示產品的外觀和質感

**生成重點**：
- 產品必須是絕對主角（佔 60-80% 畫面）
- 光線均勻、專業，突出表面質感和精密度
- 背景簡潔（依風格選擇）
- 可包含產品英文名稱和認證標記

**常見錯誤**：
- ❌ 背景太複雜，搶了產品風頭
- ❌ 光線不均，有奇怪的陰影
- ❌ 產品太小，需要放大鏡才能看清
- ✅ 乾淨、專業、一眼就能理解產品是什麼

**Prompt 範例**：
```
Professional product photograph of precision CNC-machined aluminum bracket 
placed on a clean workbench. Bright studio lighting emphasizing surface finish.
Sharp focus on product details. Style: clean industrial, deep gray and metallic silver.
Text overlay: "CNC Aluminum Bracket | ISO 9001 Certified"
High resolution, B2B commercial quality.
The image should look like a real professional product photograph.
```

---

#### 圖2：痛點洞察圖 (Pain Point)
**目的**：不直接賣產品，而是呈現買家供應鏈中的痛苦教訓

**為什麼要這張圖？**
- 單純展示產品圖片，買家不一定感興趣
- 但如果先喚起他們的痛點，他們就會主動尋求解決方案
- 這是情感連結的第一步

**生成重點**：
- 場景要**真實、有張力但不過度戲劇化**
- 標題必須是**問句形式**，引發買家思考
- 情感：略帶挫折感，但有希望被解決

**常見痛點場景**（根據產品選擇）：

| 痛點類型 | 場景描述 | 標題範例 |
|---------|---------|---------|
| **精度疑慮** | 工程師檢查發現尺寸偏差，退件堆積 | Is Your Supplier's Tolerance Within Spec? |
| **交期延誤** | 工廠趕工加班，日期倒數，管理層焦慮 | Tired of Suppliers Missing Deadlines? |
| **溝通困難** | 郵件往返、文件堆積、誤解造成返工 | How Many Emails Does It Take to Fix an Order? |
| **品質不穩定** | 同批次產品外觀差異明顯 | Why Does Quality Vary From Batch to Batch? |
| **售後無人** | 客服電話無人接、郵件石沉大海 | What Happens After You Place Your Order? |

**Prompt 範例**：
```
A realistic factory floor photo showing a frustrated quality control engineer 
examining precision mold components with visible dimensional errors. 
Other workers in background look concerned. Harsh industrial lighting.
Leave space at bottom for text.
Text overlay: "Is Your Mold Supplier Costing You More Than You Think?"
```

---

#### 圖3：聯繫理由圖 (Why Now)
**目的**：承接痛點，展現問題被解決後的正向情境

**生成重點**：
- 這是**希望圖**，展示與我們合作的美好未來
- 光線和氛圍要比圖2亮得多
- 標語簡潔有力（3-5 個單詞最佳）
- 可以展示認證牌、設備、工程師微笑等

**心理機制**：
- 圖2 讓買家看到問題的嚴重性
- 圖3 讓買家看到希望和解決方案
- 結合起來，就是一個完整的說服故事

**Prompt 範例**：
```
A professional photograph showing a confident quality control engineer 
approving a flawless precision component in a clean, modern factory.
ISO 9001 certification plaque visible in background.
Warm, reassuring lighting. Leave space at top.
Text overlay: "30 Years of Precision. Zero Compromise."
```

---

#### 圖4：產品應用範圍圖 (Application Scene)
**目的**：場景化展示產品在實際環境中被使用，體現多元應用

**生成重點**：
- 展示產品**如何被使用**，而非只展示產品本身
- 工人/技術人員要看起來專業、有技能
- 可以展示多種應用場景（如果產品有多個應用領域）
- 光線自然，環境真實

**常見情況**：
- 機械部件 → 在機器上運作的場景
- 模具 → 被用於注塑機的場景
- 五金件 → 組裝在最終產品上的場景

**Prompt 範例**：
```
A realistic wide-angle scene showing precision components being assembled 
into industrial machinery by skilled technicians. Workers are focused, 
wearing safety gear. Modern factory environment, bright industrial lighting.
Clean, well-organized workspace demonstrates precision and care.
```

---

#### 圖5：競爭優勢圖 (Competitive Edge)
**目的**：左右對比構圖，用數據和視覺證明為什麼選我們而不是競爭對手

**生成重點**：
- **左邊**一定是問題/競品
- **右邊**一定是我們的優勢
- 對比要**視覺上非常清晰**，一眼就能看出差異
- 可以包含具體的對比數據（公差、良率、交期）

**常見對比維度**：

| 維度 | 競品（左邊） | 我們（右邊） |
|------|-----------|-----------|
| **表面質感** | 粗糙、有刮痕 | 光滑、鏡面般 |
| **精度** | 尺寸不均、公差大 | 精密、公差±0.01mm |
| **組裝效果** | 間隙不均、對齊差 | 完美配合、間隙均勻 |
| **外觀** | 有毛刺、磕碰 | 完美、無瑕疵 |

**Prompt 範例**：
```
A split-composition comparison on a clean factory workbench.
Left side: A rough mold with visible surface defects, poor finish, dimensional inaccuracies.
Label: "Ordinary Supplier"
Right side: A flawless precision mold with mirror-like surface, perfect edges.
Label: "Our Solution"
Clean studio lighting. Neutral dark gray background.
Text overlay: "The Difference Is Measurable"
Leave space for specific comparison data (tolerance, yield rate, etc.)
```

---

#### 圖6：信任背書圖 (Why Choose Us)
**目的**：展現公司規模、設備實力與年資，徹底消除買家疑慮

**生成重點**：
- 展示**真實的工廠環境**（或高質量的模擬）
- 人員要穿著整齊、看起來專業
- 設備要看起來現代、維護良好
- 可以包含認證牌、獎項、人員證書等

**應該展示的元素**：
- ✅ 大規模的生產設備
- ✅ 井井有條的工廠環境
- ✅ 穿著專業的工作人員
- ✅ ISO 認證、行業獎項
- ✅ 研發實驗室（如有）
- ✅ 檢測設備

**不應該展示的元素**：
- ❌ 雜亂、骯髒的環境
- ❌ 員工穿著隨意或敷衍
- ❌ 老舊、破損的設備

**Prompt 範例**：
```
A wide-angle professional corporate photograph of a large, modern precision 
manufacturing facility. Rows of state-of-the-art CNC machines are clean and 
well-organized. Technicians in company uniforms work professionally at stations.
Bright overhead industrial lighting. The environment feels established, modern, 
technically capable.
Text overlay: "Founded 1994 | ISO 9001 Certified | 500+ Global Clients"
```

---

## 框架 B：消費品

### 適用產品
- 服裝、家居、美妝、食品、玩具、禮品、運動
- 目標買家：終端消費者、零售商
- 價格點：通常 $10-500 / 單位

### 核心目標
**用視覺故事燃起市場潛力，展示供應鏈專業**

### 三種視覺風格選擇

#### 風格 A - 現代簡約生活風 🏠
- **色調**：白、米色、莫蘭迪色系
- **背景**：居家場景、木質台面、自然光
- **字體**：Raleway / Playfair Display
- **適合**：歐美家居買家
- **感覺**：高級感、精緻、生活品味、安靜優雅

#### 風格 B - 活力流行時尚風 ⚡
- **色調**：飽和色、撞色、品牌主色
- **背景**：街頭場景、棚拍白底、色塊背景
- **字體**：Bebas Neue / 無襯線粗體
- **適合**：服飾、年輕消費品買家
- **感覺**：潮、年輕、充滿能量、引人注目

#### 風格 C - 自然有機質感風 🌿
- **色調**：大地色、綠色、原木色
- **背景**：戶外場景、天然材質台面
- **字體**：手寫體 / 細襯線
- **適合**：食品、美妝、有機品買家
- **感覺**：純樸、自然、值得信賴、生態友善

### 消費品的六張圖片詳解

#### 圖1-6：應用同上
消費品使用相同的六圖框架，但重點略有不同：

- **主圖**：生活方式為主，而非純產品
- **痛點**：消費者日常困擾，而非工廠問題
- **應用**：日常使用場景，而非工業應用
- **背書**：品牌故事和工藝，而非公司規模

---

## 實戰步驟

### Step 1：確定框架
```
問自己：「我的產品主要賣給誰？」
- 企業/工廠/採購方？→ 框架 A（B2B 工業品）
- 終端消費者？→ 框架 B（消費品）
```

### Step 2：選擇風格
```
根據框架選擇 3 種風格中的 1 種：
- 框架A + 風格 A → 專業冷調工業風
- 框架A + 風格 B → 乾淨簡約商務風
- 框架A + 風格 C → 場景化情境風
- 框架B + 風格 A → 現代簡約生活風
- 框架B + 風格 B → 活力流行時尚風
- 框架B + 風格 C → 自然有機質感風
```

### Step 3：收集必要信息

**所有框架都需要**：
- 產品名稱和英文名稱
- 產品分類
- 主要應用場景或使用方式
- 核心特色和賣點

**B2B 框架還需要**：
- 公司年資
- 主要認證（ISO、BSCI 等）
- 生產設備（如有）
- 競爭優勢的具體數據（精度、良率、交期等）
- 主要痛點場景

**消費品框架還需要**：
- 品牌故事
- 目標消費者描述
- 產品在日常生活中的應用
- 品牌價值觀或理念

### Step 4：使用 Prompt 生成圖片

#### 選項 1：使用 Claude / ChatGPT
1. 複製對應框架和風格的 Prompt 模板
2. 替換所有 `{變數}` 為你的實際信息
3. 粘貼到 Claude 或 ChatGPT
4. 獲得優化後的 Prompt
5. 將 Prompt 複製到 Midjourney 或 DALL-E 生成圖片

#### 選項 2：直接在 Midjourney 中使用
1. 複製 Prompt
2. `/imagine` + Prompt
3. 調整參數（如 `--ar 1:1` 為正方形）

---

## 數據誠實性原則

### 強制執行規則

圖片文字覆蓋的任何數據都必須標記來源：

| 標記 | 用途 | 示例 |
|------|------|------|
| `[商家提供]` | 商家明確說出的數字或事實 | "20 Years [商家提供]" |
| `[官網]` | 從官網抓取的事實 | "ISO 9001 [官網]" |
| `[⚠️待補充]` | 商家未提供，留待補充 | "Defect Rate: [⚠️待補充]" |

### 禁止捏造

❌ 禁止虛構年資、產能、認證、客戶數等具體數字  
❌ 禁止誇大實際能力  
❌ 禁止冒充不擁有的認證

如果缺少數據，有以下選擇：
1. 用通用標語替代（如 "Precision You Can Measure"）
2. 標記為 `[⚠️待補充]`，讓商家稍後填入
3. 請商家提供這些信息

---

## 常見問題

### Q：是否所有產品都適合六圖框架？
A：大多數產品都適合。但對於極簡產品（如一個螺釘），可能只需要前 3 張圖。框架是建議，可根據實際調整。

### Q：圖片尺寸有要求嗎？
A：阿里國際站建議 900×900px（正方形）。Midjourney 用 `--ar 1:1`，DALL-E 選擇正方形尺寸。

### Q：能否使用真實照片作為基礎？
A：絕對可以！實際上這樣效果會更好。可以用 Photoshop 或 Canva 調整亮度、對比、添加文字等。

### Q：需要多少時間生成 6 張圖？
A：
- 手動逐張生成：20-30 分鐘
- 批量 Prompt（Midjourney）：5-10 分鐘
- ChatGPT 生成全部 Prompt：2-3 分鐘

### Q：生成的圖片質量如何評估？
A：參考檢查清單：
- [ ] 產品清晰可見（主圖尤其重要）
- [ ] 光線專業、均勻
- [ ] 背景符合選定風格
- [ ] 文字清晰易讀
- [ ] 整體看起來像專業攝影而非 AI 生圖
- [ ] 情感傳達正確（痛點圖應該有張力，理由圖應該有希望等）

### Q：如果生成的圖片太 AI 感怎麼辦？
A：調整 Prompt 中的「真實感」描述：
- 加入 "real professional photograph"
- 移除過度藝術化的描述
- 降低細節要求
- 重新生成

---

## 成功案例思路

（你可以參考這些來檢查自己的圖片是否成功）

### B2B 工業品 - 精密模具商
- 圖1：清晰展示模具的精密度和表面質感
- 圖2：展示公差錯誤導致的退件
- 圖3：展示品管通過檢查後的放心場景
- 圖4：展示模具在注塑機上運作
- 圖5：對比普通模具和精密模具的表面差異
- 圖6：寬角展示廠房、CNC 機床、員工

### 消費品 - 美妝品牌
- 圖1：產品在柔和自然光下的照片
- 圖2：消費者因為用了低質美妝品感到失望
- 圖3：使用該品牌美妝後的自信微笑
- 圖4：日常化妝/護膚的使用場景
- 圖5：對比低質和高質化妝品的效果
- 圖6：品牌工廠或實驗室的專業環境

---

## 下一步

1. **確定你的產品屬於哪個框架**
2. **選擇符合目標買家的視覺風格**
3. **收集必要的產品信息和數據**
4. **使用 Prompt 生成圖片**
5. **檢查圖片是否達到預期效果**
6. **根據需要調整和優化**

---

**版本**：2.0（基於 SKILL.md 和實戰經驗）  
**最後更新**：2026-08-05
