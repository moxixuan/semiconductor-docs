# ⚡ 快速参考 - 常用命令和配置

## 📦 npm命令

| 命令 | 说明 |
|------|------|
| `npm start` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run serve` | 预览构建后的版本 |
| `npm run clear` | 清除构建缓存 |
| `npm install --legacy-peer-deps` | 安装依赖（兼容模式） |

## 🚀 启动选项

| 方式 | 命令 | 说明 |
|------|--------|------|
| 自动化 | `./SETUP_GUIDE.sh` | 一键启动（推荐） |
| 手动 | `npm start` | 手动启动 |
| 自定义端口 | `PORT=3001 npm start` | 使用其他端口 |

## 📁 重要文件

| 文件 | 用途 | 编辑优先级 |
|------|------|----------|
| `docusaurus.config.js` | 主配置 | ⭐⭐⭐⭐⭐ |
| `sidebars.js` | 侧边栏 | ⭐⭐⭐⭐⭐ |
| `package.json` | 依赖和脚本 | ⭐⭐⭐⭐⭐ |
| `src/css/custom.css` | 自定义样式 | ⭐⭐⭐ |
| `docs/intro.md` | 首页 | ⭐⭐⭐ |
| `docs/` | 所有文档 | ⭐⭐⭐⭐⭐ |

## 📖 添加新文档

### 标准模板

```markdown
---
title: "文档标题"
description: "简短描述"
sidebar_label: "显示名称"
sidebar_position: 1
tags: [tag1, tag2]
---

# 主标题

内容...

## 子标题

- 列表项1
- 列表项2

:::tip 提示
提示内容...
:::
```

### 代码高亮

\`\`\`verilog
module example (clk, rst);
endmodule
\`\`\`

\`\`\`python
def example():
    pass
\`\`\`

### 提示框

\`\`\`
:::tip 提示
提示内容
:::

:::warning 警告
警告内容
:::

:::info 信息
信息内容
:::
\`\`\`

## 🔍 搜索命令

### 在项目中搜索

```bash
# 搜索文件内容
grep -r "关键词" docs/

# 搜索文件名
find docs/ -name "*.md" | grep "关键词"
```

### 全文搜索

```bash
# 使用ripgrep（安装：brew install ripgrep）
rg "关键词" docs/

# 使用grep
grep -r "关键词" docs/ --include="*.md"
```

## 🌐 本地URL

| 环境 | URL |
|------|-----|
| 开发 | http://localhost:3000 |
| 自定义端口 | http://localhost:PORT |
| 预览 | http://localhost:3000 (运行npm run serve) |

## 📊 构建信息

| 目录 | 说明 |
|------|------|
| `build/` | 生产构建输出 |
| `build/static/` | 静态资源 |
| `build/assets/js/` | JavaScript文件 |
| `build/assets/css/` | CSS文件 |

## 🔧 常见问题

### npm install 失败

```bash
# 清理缓存
npm cache clean --force
rm -rf node_modules package-lock.json

# 重新安装
npm install --legacy-peer-deps
```

### 端口被占用

```bash
# 查找占用端口的进程
lsof -ti:3000

# 或使用其他端口
PORT=3001 npm start
```

### 构建失败

```bash
# 清理构建缓存
npm run clear

# 重新构建
npm run build
```

### 浏览器缓存

```bash
# 清除缓存后访问
# Chrome: Ctrl+Shift+R
# Firefox: Ctrl+Shift+R
# 或使用隐私模式
```

## 📱 浏览器开发者工具

### 快捷键

| 操作 | Chrome/Firefox | Safari |
|------|---------------|--------|
| 打开开发者工具 | F12 | Cmd+Option+I |
| 元素检查器 | Ctrl+Shift+C | Cmd+Option+C |
| 控制台 | Ctrl+Shift+J | Cmd+Option+J |
| 网络面板 | Ctrl+Shift+E | Cmd+Option+E |
| 刷新缓存 | Ctrl+Shift+R | Cmd+Option+R |

### 常用功能

```javascript
// 控制台命令
console.log('调试信息');
console.error('错误信息');
console.warn('警告信息');
document.documentElement; // 查看根元素
```

## 🎨 自定义样式

### 颜色变量

```css
:root {
  --ifm-color-primary: #2e8555;
  --ifm-color-primary-dark: rgb(33, 175, 144);
}
```

### 调整主题

```css
/* 修改导航栏背景 */
.navbar { background-color: #your-color; }

/* 修改侧边栏宽度 */
.sidebar { width: 300px; }

/* 修改代码字体 */
.theme-code-block { font-size: 14px; }
```

## 🚢 部署平台

| 平台 | 命令 | 说明 |
|------|--------|------|
| Vercel CLI | `vercel --prod` | 快速部署 |
| Vercel Web | 访问vercel.com | 图形界面 |
| Netlify | 拖拽部署 | 简单易用 |
| GitHub Pages | `npm run deploy` | 官方集成 |

## 🔑 认证配置

### SSH密钥

```bash
# 生成密钥
ssh-keygen -t ed25519

# 添加到GitHub
# Settings → SSH and GPG keys → New SSH key
```

### Personal Access Token

```bash
# 生成位置
# Settings → Developer settings → Personal access tokens
# Token名称: semiconductor-docs-deploy
# 权限: repo (完整仓库访问)
```

## 📞 获取帮助

| 问题类型 | 参考文档 |
|---------|---------|
| 项目概述 | README.md |
| 快速开始 | QUICKSTART.md |
| 下载使用 | README_下载使用.md |
| 详细操作 | 操作指南.md |
| Git配置 | GITHUB_SETUP.md |
| 部署指南 | DEPLOYMENT.md |
| 部署检查 | DEPLOYMENT_CHECKLIST.md |

---

**📌 收藏此页面以快速查找常用命令！**
