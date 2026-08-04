// AI Prompt Platform - Main JavaScript

// 場景數據
let scenarios = {};

// 初始化
document.addEventListener('DOMContentLoaded', function() {
  loadScenarios();
});

// 加載場景數據
async function loadScenarios() {
  try {
    const response = await fetch('../scenarios/scenarios.json');
    scenarios = await response.json();
  } catch (error) {
    console.error('Failed to load scenarios:', error);
  }
}

// 取得選中的場景
function getSelectedScenario() {
  const params = new URLSearchParams(window.location.search);
  return params.get('scenario');
}

// 構建表單
function buildForm(scenarioId) {
  const scenario = scenarios.scenarios.find(s => s.id === scenarioId);
  if (!scenario) return;

  const form = document.getElementById('scenario-form');
  if (!form) return;

  scenario.questions.forEach(question => {
    const group = createFormGroup(question);
    form.appendChild(group);
  });
}

// 建立表單群組
function createFormGroup(question) {
  const group = document.createElement('div');
  group.className = 'form-group';

  const label = document.createElement('label');
  label.textContent = question.question;
  group.appendChild(label);

  let input;
  switch (question.type) {
    case 'text':
      input = document.createElement('input');
      input.type = 'text';
      input.name = question.id;
      input.placeholder = question.placeholder;
      break;
    case 'textarea':
      input = document.createElement('textarea');
      input.name = question.id;
      input.placeholder = question.placeholder;
      break;
    case 'number':
      input = document.createElement('input');
      input.type = 'number';
      input.name = question.id;
      input.placeholder = question.placeholder;
      break;
    case 'select':
      input = document.createElement('select');
      input.name = question.id;
      const defaultOption = document.createElement('option');
      defaultOption.value = '';
      defaultOption.textContent = '請選擇...';
      input.appendChild(defaultOption);
      question.options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        input.appendChild(opt);
      });
      break;
  }

  if (input) {
    input.required = true;
    group.appendChild(input);
  }

  return group;
}

// 生成 Prompt
function generatePrompt(formData, scenarioId, promptType) {
  const scenario = scenarios.scenarios.find(s => s.id === scenarioId);
  if (!scenario) return '';

  let prompt = '';

  // 根據 promptType 和 formData 生成對應的 prompt
  // 這裡需要根據實際的 prompt 模板來實現

  return prompt;
}

// 複製到剪貼板
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('已複製到剪貼板！');
  }).catch(() => {
    alert('複製失敗，請手動複製');
  });
}

// 儲存表單數據到 localStorage
function saveFormData(scenarioId, formData) {
  localStorage.setItem(`scenario_${scenarioId}`, JSON.stringify(formData));
}

// 讀取表單數據
function loadFormData(scenarioId) {
  const data = localStorage.getItem(`scenario_${scenarioId}`);
  return data ? JSON.parse(data) : null;
}

// 導出為 JSON
function exportAsJSON(data, filename) {
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data, null, 2)));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
