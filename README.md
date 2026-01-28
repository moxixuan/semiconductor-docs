# 半导体知识文档库

一个专业的半导体技术文档检索平台，基于 Docusaurus + Meilisearch + Vercel 构建。

## 📚 内容涵盖

- 🎯 **芯片设计**：数字电路、模拟电路、FPGA/ASIC设计
- 🏭 **工艺制造**：7nm/5nm工艺、FinFET、封装测试
- 🛠️ **EDA工具**：Cadence、Synopsys、开源工具
- 📚 **协议标准**：AMBA、PCIe、DDR、USB等

## 🚀 快速开始

### 前置要求

- Node.js >= 16.14
- npm 或 yarn

### 本地运行

```bash
# 1. 克隆项目
git clone https://github.com/your-org/semiconductor-docs.git
cd semiconductor-docs

# 2. 安装依赖
npm install --legacy-peer-deps

# 3. 启动开发服务器
npm start

# 4. 打开浏览器访问
# http://localhost:3000
```

### 构建生产版本

```bash
npm run build
```

构建后的文件在 `build/` 目录中。

## 🔍 搜索功能

本项目支持全文搜索：

### 本地搜索（默认）
开箱即用，无需额外配置。

### Meilisearch 搜索（推荐）

#### 快速启动 Meilisearch

```bash
# 使用 Docker
docker run -it -p 7700:7700 getmeili/meilisearch:v1.5

# 或者使用 Homebrew
brew install meilisearch
meilisearch
```

#### 配置环境变量

创建 `.env` 文件：

```bash
MEILISEARCH_HOST=http://localhost:7700
MEILISEARCH_API_KEY=your-api-key
```

#### 索引文档

```bash
npm run index-docs
```

## 📦 部署

### Vercel 部署（推荐）

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 自动部署完成

### 其他平台

- **Netlify**：拖放 `build/` 目录即可
- **GitHub Pages**：运行 `npm run deploy`
- **自建服务器**：部署 `build/` 目录到任意静态服务器

## 🤖 AI 集成

### API 访问

Meilisearch 提供标准 REST API：

```bash
curl -X POST 'http://localhost:7700/indexes/docs/search' \
  -H 'Authorization: Bearer YOUR_API_KEY' \
  -H 'Content-Type: application/json' \
  --data-binary '{
    "q": "7nm工艺",
    "limit": 20
  }'
```

### MCP 协议

支持 Model Context Protocol（MCP）：

```bash
# 安装 MCP 服务器
npm install @meilisearch/mcp-server

# 配置 Claude Desktop
# 在 claude_desktop_config.json 中添加：
{
  "mcpServers": {
    "meilisearch": {
      "command": "npx",
      "args": ["@meilisearch/mcp-server"],
      "env": {
        "MEILISEARCH_HOST": "http://localhost:7700",
        "MEILISEARCH_API_KEY": "your-api-key"
      }
    }
  }
}
```

## 📝 添加文档

### 文档结构

```
docs/
├── ic-design/          # 芯片设计
│   ├── intro.md
│   ├── digital/
│   ├── analog/
│   └── fpga-asic/
├── process/            # 工艺制造
│   ├── intro.md
│   ├── nodes/
│   ├── packaging/
│   └── reliability/
├── eda-tools/          # EDA工具
├── standards/          # 协议标准
└── datasheets/         # 数据手册
```

### Markdown 格式

```markdown
---
title: 文档标题
description: 文档描述
sidebar_label: 侧边栏显示名称
sidebar_position: 1
---

# 内容

使用标准的 Markdown 语法。
```

## 🛠️ 开发

### 可用命令

```bash
npm start          # 启动开发服务器
npm run build      # 构建生产版本
npm run serve      # 本地预览构建后的版本
npm run swizzle    # 自定义主题组件
```

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Pull Request 或 Issue！

## 📮 联系方式

- GitHub Issues: [提交问题](https://github.com/your-org/semiconductor-docs/issues)
- Email: your-email@example.com

---

**Built with [Docusaurus](https://docusaurus.io/)**
