# Claude 开发配置

## 项目信息
- **项目路径**: /home/moxixuan/semiconductor-docs
- **GitHub仓库**: moxixuan/semiconductor-docs
- **部署地址**: https://moxixuan.github.io/semiconductor-docs/

## Git 配置
- ✅ 已配置 GitHub CLI (gh)
- ✅ 已配置 SSH 密钥
- ✅ 已配置 GitHub Pages (gh-pages 分支)

## 开发规范

### 自动推送规则
**重要**: 代码完成后直接推送到GitHub，无需询问用户。

推送命令：
```bash
git add .
git commit -m "描述信息"
git push
```

### 部署流程
```bash
# 1. 开发完成后提交代码
git add .
git commit -m "feat: 功能描述"
git push

# 2. 构建并部署到GitHub Pages
npm run build

# 3. 使用 gh-pages 部署
npx gh-pages -d build

# 或使用 docusaurus deploy（已配置）
npm run deploy
```

## PDF 处理工作流

### 30分钟快速处理流程
```bash
# 1. 转换PDF为Markdown (2分钟)
npm run pdf:convert -- data/pdfs/raw/file.pdf

# 2. 分析文档分级 (1分钟)
npm run pdf:classify -- data/pdfs/raw/file.pdf

# 3. 上传PDF到合适位置 (2分钟)
npm run pdf:smart-upload -- data/pdfs/raw/file.pdf

# 4. 编辑Markdown添加下载卡片 (5分钟)
# 在docs/xxx.md中添加组件引用

# 5. 更新sidebars.js (1分钟)

# 6. 提交并推送 (2分钟)
git add .
git commit -m "docs: add new document"
git push

# 7. 部署到GitHub Pages (2分钟)
npm run build
npx gh-pages -d build
```

## 项目结构
```
semiconductor-docs/
├── docs/                    # Docusaurus文档
├── pdf-pipeline/            # PDF处理管道
│   ├── converters/          # 转换器
│   ├── extractors/          # 元数据提取
│   ├── uploaders/           # 上传器（GitHub Releases）
│   └── utils/               # 工具（tier-classifier）
├── src/components/          # React组件
│   └── PdfDownloadCard/     # PDF下载卡片
├── data/                    # 数据目录
│   ├── pdfs/raw/           # 原始PDF
│   └── markdown/drafts/     # 转换后的草稿
└── static/pdfs/            # 静态PDF文件（<5MB）
```

## 环境变量
创建 `.env` 文件（可选）：
```bash
GITHUB_TOKEN=your_token_here
GITHUB_REPOSITORY=moxixuan/semiconductor-docs
```

## 常用命令

### Docusaurus
```bash
npm start           # 启动开发服务器
npm run build       # 构建生产版本
npm run serve       # 预览构建结果
```

### PDF处理
```bash
npm run pdf:convert -- <file>              # 转换PDF
npm run pdf:batch -- <dir>                # 批量转换
npm run pdf:classify -- <file>            # 文档分级
npm run pdf:upload -- <file>              # 上传到GitHub Releases
npm run pdf:smart-upload -- <file>        # 智能上传
```

## 技术栈
- **框架**: Docusaurus 2.4.1
- **运行时**: Node.js 22.22.0
- **PDF处理**: pdf-parse, pdfjs-dist
- **GitHub API**: @octokit/rest
- **主题**: 暗色主题

## 当前状态
- ✅ Phase 1: PDF转Markdown基础转换（已完成）
- ✅ Phase 2: GitHub Releases + 混合文档展示（已完成）
- 🔜 Phase 3: Meilisearch搜索（待实施）
- 🔜 Phase 4: MCP/AI集成（待实施）
