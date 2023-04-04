# HuTao.Shell

- 现在市面上开源免费好用的 Shell 工具要不停更了,要不未完全开源.导致我一直没找到合适的工具.
- HuTaoShell 希望能开发出一款好用的 SSH 管理工具,项目使用 Electron Forge 从 0 构建.
- 先打好架子,希望有大佬能一起来用爱发电,毕竟我是从 0 开始学,一点一点的开发.Electron 和类似的 SSH 工具都没搞过,也不知道原理.
- React 18+
- Electron 24+
- TypeScript 5+

## 初步计划

- 先搭好 Electron 架子
- 学习 Electron 开发
- 学习 Shell 开发相关东西

## 启动项目

- 安装[yarn 2.x](https://yarnpkg.com/getting-started/install)包管理工具
- 要求 [Node.js](https://nodejs.org/en/download/) 的版本 >=18.6
- 以管理员身份打开命令提示符

```bash
# 使用管理员权限运行corepack命令
corepack enable
corepack prepare yarn@stable --activate

# 安装项目依赖
yarn install
# 设置 Electron Forge 的脚手架
yarn electron-forge import
# 启动项目
yarn start
# 构建项目
yarn make
# 打包项目
yarn package
# 更新项目依赖
yarn upgrade-interactive
```

## 更新 yarn 包管理工具

```bash
# 更新yarn主版本
yarn set version stable
# 更新 yarn 更新依赖包插件
yarn plugin import interactive-tools
# 更新 yarn TypeScript 库自动加入插件
yarn plugin import typescript
```
