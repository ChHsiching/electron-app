/**
 * 当 DOM 内容完全加载和解析时执行的事件监听器
 * @event DOMContentLoaded
 */
  
window.addEventListener('DOMContentLoaded', () => {

  /**
   * 替换指定元素的文本内容
   * @param {string} selector - 元素的 ID 选择器
   * @param {string} text - 要替换的文本内容
   * @description 根据提供的元素 ID 选择器找到 DOM 元素，并将其文本内容替换为指定的文本。
   * 如果元素存在，则更新其 innerText；否则什么也不做。
   * @example
   * replaceText('chrome-version', 'v91.0');
   */
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }
  
  /**
   * 依次替换 'chrome'、'node'、'electron' 版本号
   */
  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
})
