// app 模块，控制 app 的事件生命周期
// BrowserWindow 模块，创建和管理 app 窗口
const { app, BrowserWindow } = require('electron')

const path = require('node:path')


// 添加 createWindow() 方法，将 index.html 加载进一个新的 BrowserWindow 实例
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // __dirname: 指向当前正在执行脚本的路径
      // path.join API: 将多个路径联结在一起，创建一个跨平台的路径字符串
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
}


app.whenReady().then(() => {
  // 调用createWindow()函数，打开窗口
  // app 模块的 ready 事件被激发后才能创建浏览器窗口
  createWindow()

  // 如果没有窗口打开则打开一个窗口 (macOS)
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// 关闭所有窗口时退出应用 (Windows & Linux)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
