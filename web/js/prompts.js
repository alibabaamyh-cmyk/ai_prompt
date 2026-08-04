// Prompt 庫頁面邏輯

let allPromptsData = [];

// 初始化
document.addEventListener('DOMContentLoaded', async function() {
  await loadAllPromptsData();
  displayPrompts(allPromptsData);
  setupFilters();
});

// 加載所有 Prompt 數據
async function loadAllPromptsData() {
  try {
    const response = await fetch('../prompts/index.json');
    const indexData = await response.json();

    // 為每個 prompt 類型加載詳細數據
    for (const promptType of indexData.prompts) {
      for (const scenario of promptType.scenarios) {
        try {
          const fileResponse = await fetch(`../prompts/${scenario.file}`);
          if (fileResponse.ok) {
            const promptData = await fileResponse.json();
            if (promptData.prompts) {
              promptData.prompts.forEach(prompt => {
                allPromptsData.push({
                  type: promptType.type,
                  typeName: promptType.name,
                  typeIcon: promptType.icon,
                  scenario: scenario.id,
                  scenarioName: scenario.name,
                  id: prompt.id,
                  name: prompt.name,
                  description: prompt.description,
                  template: prompt.template || ''
                });
              });
            }
          }
        } catch (e) {
          console.error(`Failed to load ${scenario.file}:`, e);
        }
      }
    }
  } catch (error) {
    console.error('Failed to load prompts index:', error);
  }
}

// 顯示 Prompt 卡片
function displayPrompts(prompts) {
  const grid = document.getElementById('prompts-grid');
  grid.innerHTML = '';

  if (prompts.length === 0) {
    grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">沒有找到符合條件的 Prompt</p>';
    return;
  }

  prompts.forEach(prompt => {
    const card = createPromptCard(prompt);
    grid.appendChild(card);
  });
}

// 建立 Prompt 卡片
function createPromptCard(prompt) {
  const card = document.createElement('div');
  card.className = 'prompt-card';

  card.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
      <h3>${prompt.typeIcon} ${prompt.name}</h3>
    </div>
    <p>${prompt.description}</p>
    <div>
      <span class="badge">${prompt.typeName}</span>
      <span class="badge secondary">${prompt.scenarioName}</span>
    </div>
  `;

  card.addEventListener('click', () => showPromptDetail(prompt));

  return card;
}

// 顯示 Prompt 詳情 Modal
function showPromptDetail(prompt) {
  const modal = document.getElementById('prompt-modal');
  document.getElementById('modal-title').textContent = `${prompt.typeIcon} ${prompt.name}`;
  document.getElementById('modal-description').textContent = prompt.description;
  document.getElementById('modal-template').textContent = prompt.template;

  // 存儲當前 prompt 用於複製
  modal.dataset.currentPrompt = prompt.template;

  modal.style.display = 'flex';
}

// 關閉 Modal
function closePromptModal() {
  document.getElementById('prompt-modal').style.display = 'none';
}

// 複製 Prompt 到剪貼板
function copyPromptToClipboard() {
  const modal = document.getElementById('prompt-modal');
  const prompt = modal.dataset.currentPrompt;

  navigator.clipboard.writeText(prompt).then(() => {
    alert('✅ Prompt 已複製到剪貼板！');
  }).catch(() => {
    alert('複製失敗，請手動複製');
  });
}

// 設置篩選功能
function setupFilters() {
  const typeFilter = document.getElementById('type-filter');
  const scenarioFilter = document.getElementById('scenario-filter');

  typeFilter.addEventListener('change', applyFilters);
  scenarioFilter.addEventListener('change', applyFilters);

  // 點擊 Modal 外部關閉
  document.getElementById('prompt-modal').addEventListener('click', (e) => {
    if (e.target.id === 'prompt-modal') {
      closePromptModal();
    }
  });
}

// 應用篩選
function applyFilters() {
  const typeFilter = document.getElementById('type-filter').value;
  const scenarioFilter = document.getElementById('scenario-filter').value;

  const filtered = allPromptsData.filter(prompt => {
    const typeMatch = !typeFilter || prompt.type === typeFilter;
    const scenarioMatch = !scenarioFilter || prompt.scenario === scenarioFilter;
    return typeMatch && scenarioMatch;
  });

  displayPrompts(filtered);
}

// 點擊 Modal 外部關閉
window.addEventListener('click', (event) => {
  const modal = document.getElementById('prompt-modal');
  if (event.target === modal) {
    closePromptModal();
  }
});
