# Electron Hello World Demo

这是一个基于 Electron 框架的 "Hello World" 项目，使用 Yarn 进行包管理。

## 目录

- [安装依赖](#安装依赖)
- [启动项目](#启动项目)
- [项目结构](#项目结构)
- [依赖项](#依赖项)

## 安装依赖

首先，确保你已经安装了 [Yarn](https://yarnpkg.com/) 和 [Node.js](https://nodejs.org/)。  
然后在项目根目录下运行以下命令来安装所有依赖：

```bash
yarn
```

## 启动项目

在安装依赖后，你可以通过以下命令启动 Electron 应用：

```bash
yarn start
```

此命令将启动 Electron 并显示 "Hello World" 窗口。

## 项目结构

```bash
├── package.json    # 项目的配置文件，包括依赖项和脚本
├── main.js         # Electron 主进程代码
├── index.html      # 显示的 HTML 页面
└── renderer.js     # 渲染进程的 JavaScript 代码
```

## 依赖项

- [Electron](https://www.electronjs.org/): 用于构建跨平台桌面应用的框架。
- [Yarn](https://yarnpkg.com/): 用于管理项目的包管理器。

