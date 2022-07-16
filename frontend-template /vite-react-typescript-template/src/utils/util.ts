declare global {
  interface Window {
    VConsole: any
  }
}

/**
 * 增加vConsole调试控件
 */
export const vConsoleWidget = () => {
  const Script = document.createElement('script')
  Script.src = 'https://cdn.staticfile.org/vConsole/3.14.6/vconsole.min.js'
  document.head.appendChild(Script)
  Script.addEventListener('load', (ev) => {
    window.VConsole && new window.VConsole()
  })
}

export default {
  vConsoleWidget,
}
