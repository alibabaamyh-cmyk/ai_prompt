// 主页面逻辑

const basePath = window.location.pathname.includes('/ai_prompt/') ? '/ai_prompt/' : '/';
let allImagePrompts = [];
let allDataPrompts = [];
let currentModal = null;

// 初始化
document.addEventListener('DOMContentLoaded', async function() {
  await loadAllPrompts();
  displayImagePrompts('framework');
  displayDataPrompts();
});

// 加载所有 Prompt
async function loadAllPrompts() {
  try {
    // 加载产品主图 Prompt
    const imageResponse = await fetch(basePath + 'prompts/product-image/alibaba-six-image-framework.json');
    if (imageResponse.ok) {
      const imageData = await imageResponse.json();
      if (imageData.prompts) {
        allImagePrompts = imageData.prompts.map(p => ({
          ...p,
          type: 'product-image',
          typeName: '產品主圖'
        }));
      }
    }

    // 加载资料结构化 Prompt
    const dataResponse = await fetch(basePath + 'prompts/data-structuring/data-structuring.json');
    if (dataResponse.ok) {
      const dataData = await dataResponse.json();
      if (dataData.prompts) {
        allDataPrompts = dataData.prompts.map(p => ({
          ...p,
          type: 'data-structuring',
          typeName: '資料結構化'
        }));
      }
    }
  } catch (error) {
    console.error('Failed to load prompts:', error);
    alert('無法加載 Prompt，請重新整理頁面');
  }
}

// 显示产品主图 Prompt
function displayImagePrompts(category) {
  const grid = document.getElementById('image-prompts-grid');
  grid.innerHTML = '';

  let filtered = allImagePrompts;

  // 根據分類篩選
  if (category === 'industry') {
    // 按行業框架分組
    filtered = allImagePrompts.filter(p => p.id && (p.id.includes('b2b') || p.id.includes('consumer') || p.id.includes('framework')));
  } else if (category === 'style') {
    // 按風格分組
    filtered = allImagePrompts.filter(p => p.id && (p.id.includes('style') || p.id.includes('industrial')));
  }

  if (filtered.length === 0) {
    grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">暫無 Prompt</p>';
    return;
  }

  filtered.forEach(prompt => {
    const card = createPromptCard(prompt);
    grid.appendChild(card);
  });
}

// 显示资料结构化 Prompt
function displayDataPrompts() {
  const grid = document.getElementById('data-prompts-grid');
  grid.innerHTML = '';

  allDataPrompts.forEach(prompt => {
    const card = createPromptCard(prompt);
    grid.appendChild(card);
  });
}

// 创建 Prompt 卡片
function createPromptCard(prompt) {
  const card = document.createElement('div');
  card.className = 'prompt-card';

  card.innerHTML = `
    <h4>${prompt.name}</h4>
    <p>${prompt.description}</p>
  `;

  card.addEventListener('click', () => showPromptModal(prompt));

  return card;
}

// 显示 Prompt Modal
function showPromptModal(prompt) {
  document.getElementById('modal-title').textContent = prompt.name;
  document.getElementById('modal-desc').textContent = prompt.description;

  let template = prompt.template || '';
  if (typeof template === 'string') {
    document.getElementById('modal-template').textContent = template;
  } else {
    document.getElementById('modal-template').textContent = JSON.stringify(template, null, 2);
  }

  currentModal = prompt;
  document.getElementById('prompt-modal').style.display = 'flex';
}

// 關閉 Modal
function closeModal() {
  document.getElementById('prompt-modal').style.display = 'none';
  currentModal = null;
}

// 複製 Modal 中的 Prompt
function copyModal() {
  if (!currentModal) return;

  let text = currentModal.template || '';
  if (typeof text !== 'string') {
    text = JSON.stringify(text, null, 2);
  }

  navigator.clipboard.writeText(text).then(() => {
    alert('✅ Prompt 已複製到剪貼板！');
  }).catch(() => {
    alert('複製失敗，請手動複製');
  });
}

// 切換產品主圖分類
window.switchImageCategory = function(category) {
  // 更新按鈕狀態
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  displayImagePrompts(category);
};

// 前往輸入表單
window.goToInputForm = function(formType) {
  if (formType === 'shop-positioning') {
    // 導航到旺舖定位頁面
    window.location.href = basePath + 'scenarios/?type=shop-positioning';
  } else if (formType === 'product-detail') {
    // 導航到商品詳情頁面
    window.location.href = basePath + 'scenarios/?type=product-detail';
  }
};

// 點擊 Modal 外部關閉
window.addEventListener('click', (event) => {
  const modal = document.getElementById('prompt-modal');
  if (event.target === modal) {
    closeModal();
  }
});
