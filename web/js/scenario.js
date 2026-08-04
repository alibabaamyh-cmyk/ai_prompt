// 場景詳情頁邏輯

let currentScenario = null;
let currentPromptType = null;
let allPrompts = {};

// 初始化
document.addEventListener('DOMContentLoaded', async function() {
  const params = new URLSearchParams(window.location.search);
  const scenarioId = params.get('scenario');
  const promptType = params.get('type');

  if (!scenarioId) {
    window.location.href = '../index.html';
    return;
  }

  // 加載場景和 prompt 數據
  await loadScenarios();
  await loadAllPrompts();

  currentScenario = scenarios.scenarios.find(s => s.id === scenarioId);
  currentPromptType = promptType || currentScenario.prompts[0];

  if (!currentScenario) {
    window.location.href = '../index.html';
    return;
  }

  // 顯示場景詳情
  displayScenarioDetail();
  // 建立表單
  buildForm();
  // 設置提交事件
  setupFormSubmission();
});

// 加載場景配置
async function loadScenarios() {
  try {
    const response = await fetch('../scenarios/scenarios.json');
    const data = await response.json();
    scenarios = data;
  } catch (error) {
    console.error('Failed to load scenarios:', error);
  }
}

// 加載所有 Prompt
async function loadAllPrompts() {
  try {
    // 加載各個 prompt 檔案
    const promptTypes = [
      'shop-positioning',
      'product-detail',
      'product-image',
      'data-structuring'
    ];

    for (const type of promptTypes) {
      try {
        const response = await fetch(`../prompts/${type}/universal.json`);
        if (!response.ok) {
          // 嘗試其他路徑
          const response2 = await fetch(`../prompts/${type}/brand-owner.json`);
          if (response2.ok) {
            allPrompts[type] = await response2.json();
          }
          continue;
        }
        allPrompts[type] = await response.json();
      } catch (e) {
        console.error(`Failed to load prompts for ${type}:`, e);
      }
    }
  } catch (error) {
    console.error('Failed to load prompts:', error);
  }
}

// 顯示場景詳情
function displayScenarioDetail() {
  const container = document.getElementById('scenario-detail');

  const icon = currentScenario.icon || '🏪';
  const name = currentScenario.name;
  const description = currentScenario.description;

  container.innerHTML = `
    <div class="scenario-icon" style="font-size: 3em; margin-bottom: 15px;">${icon}</div>
    <h1>${name}</h1>
    <p class="text-muted">${description}</p>
    <p style="margin-top: 20px; font-size: 0.95em;">
      <strong>推薦的 Prompt 類型：</strong> ${currentScenario.prompts.map(p => {
        const typeMap = {
          'shop-positioning': '🏪 旺舖定位',
          'product-detail': '📝 商品詳情頁',
          'product-image': '🖼️ 產品主圖',
          'data-structuring': '📊 資料結構化'
        };
        return typeMap[p] || p;
      }).join(' / ')}
    </p>
  `;
}

// 建立表單
function buildForm() {
  const form = document.getElementById('scenario-form');
  form.innerHTML = '';

  if (!currentScenario.questions) return;

  currentScenario.questions.forEach(question => {
    const group = createFormGroup(question);
    form.appendChild(group);
  });
}

// 建立表單群組
function createFormGroup(question) {
  const group = document.createElement('div');
  group.className = 'form-group';

  const label = document.createElement('label');
  label.htmlFor = question.id;
  label.textContent = question.question;
  group.appendChild(label);

  let input;
  switch (question.type) {
    case 'text':
      input = document.createElement('input');
      input.type = 'text';
      input.id = question.id;
      input.name = question.id;
      input.placeholder = question.placeholder || '';
      break;
    case 'textarea':
      input = document.createElement('textarea');
      input.id = question.id;
      input.name = question.id;
      input.placeholder = question.placeholder || '';
      break;
    case 'number':
      input = document.createElement('input');
      input.type = 'number';
      input.id = question.id;
      input.name = question.id;
      input.placeholder = question.placeholder || '';
      break;
    case 'select':
      input = document.createElement('select');
      input.id = question.id;
      input.name = question.id;
      const defaultOption = document.createElement('option');
      defaultOption.value = '';
      defaultOption.textContent = '請選擇...';
      input.appendChild(defaultOption);
      if (question.options) {
        question.options.forEach(option => {
          const opt = document.createElement('option');
          opt.value = option;
          opt.textContent = option;
          input.appendChild(opt);
        });
      }
      break;
  }

  if (input) {
    input.required = true;
    group.appendChild(input);
  }

  return group;
}

// 設置表單提交
function setupFormSubmission() {
  const btn = document.getElementById('generate-btn');
  btn.addEventListener('click', generatePrompt);
}

// 生成 Prompt
function generatePrompt() {
  const formData = collectFormData();

  if (!formData.isValid) {
    alert('請填入所有必填欄位');
    return;
  }

  // 根據場景生成多個 prompt（如果有多個推薦類型）
  const resultContainer = document.getElementById('result-container');
  resultContainer.innerHTML = '';

  const prompts = generateCustomPrompts(formData);

  prompts.forEach((prompt, index) => {
    const promptDiv = document.createElement('div');
    promptDiv.className = 'prompt-item';
    promptDiv.innerHTML = `
      <h3>${prompt.title}</h3>
      <p class="text-muted">${prompt.description}</p>
      <div class="prompt-result">
${prompt.content}
      </div>
      <button class="btn" onclick="copyPrompt(\`${prompt.content.replace(/`/g, '\\`')}\`)">📋 複製此 Prompt</button>
    `;
    resultContainer.appendChild(promptDiv);
  });

  // 顯示結果區塊
  document.getElementById('result-section').style.display = 'block';
  resultContainer.scrollIntoView({ behavior: 'smooth' });

  // 存儲表單數據
  saveFormData(currentScenario.id, formData);
}

// 收集表單數據
function collectFormData() {
  const form = document.getElementById('scenario-form');
  const formData = new FormData(form);
  const data = {};
  let isValid = true;

  for (let [key, value] of formData.entries()) {
    if (!value && form.elements[key].required) {
      isValid = false;
    }
    data[key] = value;
  }

  data.isValid = isValid;
  return data;
}

// 生成定制化的 Prompt
function generateCustomPrompts(formData) {
  const prompts = [];

  // 為每個推薦的 prompt 類型生成一個定制化版本
  currentScenario.prompts.forEach(promptType => {
    // 這裡會根據 promptType 和 formData 生成對應的 prompt
    const prompt = createPromptFromTemplate(promptType, formData);
    if (prompt) {
      prompts.push(prompt);
    }
  });

  return prompts;
}

// 從模板生成 Prompt
function createPromptFromTemplate(promptType, formData) {
  // 根據 promptType 選擇對應的模板
  let title = '';
  let description = '';
  let template = '';

  switch (promptType) {
    case 'shop-positioning':
      title = '🏪 旺舖定位 Prompt';
      description = '根據你的商家優勢，生成旺舖定位文案';
      template = getShopPositioningPrompt(formData);
      break;
    case 'product-detail':
      title = '📝 商品詳情頁 Prompt';
      description = '為商品生成吸引買家的詳情文案';
      template = getProductDetailPrompt(formData);
      break;
    case 'product-image':
      title = '🖼️ 產品主圖 Prompt';
      description = '生成用於 AI 圖像工具的產品圖片 Prompt';
      template = getProductImagePrompt(formData);
      break;
    case 'data-structuring':
      title = '📊 資料結構化 Prompt';
      description = '快速整理商品數據';
      template = getDataStructuringPrompt(formData);
      break;
  }

  return {
    title,
    description,
    content: template
  };
}

// 旺舖定位 Prompt 模板
function getShopPositioningPrompt(formData) {
  const vars = Object.fromEntries(formData);
  return `我有一個品牌/公司叫「${vars.brand_name || '【請填入品牌名稱】'}」，主要經營${vars.products || '【請填入主要產品】'}。

品牌故事/公司背景：${vars.brand_story || '【請填入品牌故事】'}
目標市場：${vars.target_market || '【請填入目標市場】'}
價格定位：${vars.price_point || '【請填入價格定位】'}
獨特優勢：${vars.unique_selling_point || '【請填入獨特優勢】'}

請根據上述信息，生成一份 200-300 字的旺舖定位文案，應該：
1. 突出品牌的專業性和差異化優勢
2. 說明品牌的核心價值和承諾
3. 引發目標客戶的信任和興趣
4. 中英文雙語呈現
5. 適合放在國際站旺舖首頁

請生成高質量的旺舖定位文案。`;
}

// 商品詳情頁 Prompt 模板
function getProductDetailPrompt(formData) {
  const vars = Object.fromEntries(formData);
  return `商品名稱：${vars.product_name || '【請填入商品名稱】'}
商品分類：${vars.product_type || '【請填入商品分類】'}
商品規格：${vars.specifications || '【請填入商品規格】'}
主要特色：${vars.features || '【請填入主要特色】'}
目標客戶：${vars.target_customer || '【請填入目標客戶】'}
競爭優勢：${vars.competitive_advantage || '【請填入競爭優勢】'}
應用場景：${vars.use_cases || '【請填入應用場景】'}

請根據上述信息，生成一份 300-400 字的商品詳細描述，應該：
1. 說明商品的核心用途和價值
2. 詳細說明特色和優勢
3. 適用人群和場景
4. 購買建議
5. 強調性價比優勢

請生成吸引力強、切中買方市場的詳情文案。`;
}

// 產品主圖 Prompt 模板
function getProductImagePrompt(formData) {
  const vars = Object.fromEntries(formData);
  return `商品名稱：${vars.product_name || '【商品名稱】'}
商品類型：${vars.product_type || '【商品類型】'}
主要顏色：${vars.main_colors || '【主要顏色】'}
風格定位：${vars.style || '【風格定位】'}
主要特色：${vars.key_features || '【主要特色】'}

請生成一個產品主圖 Prompt（適用於 Midjourney/DALL-E），要求：

**尺寸和格式：**
- 圖片尺寸：900×900px
- 比例：1:1
- 背景：純白色或淡灰色

**產品展示：**
- 產品居中、清晰、專業展示
- 展示產品的最佳角度和細節
- 突出質感和工藝

**光影效果：**
- 明亮、均勻的光線
- 自然光感，強調產品質感
- 適度陰影增加深度

**風格要素：**
- 現代、專業、高級感
- 符合國際站審美
- 突出產品質量

請生成適合 Midjourney v6 的詳細 Prompt（150-200 字）。`;
}

// 資料結構化 Prompt 模板
function getDataStructuringPrompt(formData) {
  const vars = Object.fromEntries(formData);
  return `我有${vars.product_count || '多個'}個商品需要結構化整理。
產品類別：${vars.product_categories || '【請填入產品類別】'}
數據來源：${vars.data_format || '【請填入數據格式】'}
主要挑戰：${vars.main_challenge || '【請填入主要挑戰】'}

請幫我為這些商品建立標準化結構，包括：
1. 產品 ID（SKU）
2. 中英文產品名稱
3. 產品分類
4. 詳細描述
5. 規格參數
6. 材質/成分
7. 顏色和尺寸選項
8. 價格和最小訂單量
9. 交期
10. 認證標準

輸出格式：CSV 或 Excel 表格
編碼：UTF-8
要求：清晰、完整、無重複、中英文準確

請為我設計一份完整的商品數據結構化方案。`;
}

// 複製 Prompt 到剪貼板
function copyPrompt(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('✅ 已複製到剪貼板！');
  }).catch(() => {
    alert('複製失敗，請手動複製');
  });
}

// 儲存表單數據
function saveFormData(scenarioId, data) {
  const cleanData = Object.fromEntries(data);
  delete cleanData.isValid;
  localStorage.setItem(`scenario_${scenarioId}`, JSON.stringify(cleanData));
}
