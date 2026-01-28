# 部署指南

本文档详细介绍如何将半导体知识文档库部署到生产环境。

## 📋 部署选项

### 选项1：Vercel 部署（最推荐）⭐⭐⭐⭐⭐

**优点**：
- ✅ 完全免费（个人项目）
- ✅ 自动HTTPS
- ✅ 全球CDN
- ✅ 自动部署（Git推送即部署）
- ✅ 极快的速度

**步骤**：

1. **准备代码仓库**
   ```bash
   # 将代码推送到GitHub
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/semiconductor-docs.git
   git push -u origin main
   ```

2. **连接Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 使用GitHub账号登录
   - 点击 "New Project"
   - 选择您的 `semiconductor-docs` 仓库
   - 点击 "Deploy"

3. **配置（可选）**
   - 在项目设置中配置自定义域名
   - 在环境变量中添加API密钥

4. **完成！**
   - Vercel会自动部署
   - 几秒钟后获得一个 `.vercel.app` 域名

---

### 选项2：Netlify 部署 ⭐⭐⭐⭐⭐

**优点**：
- ✅ 免费套餐慷慨
- ✅ 拖拽部署
- ✅ 表单处理
- ✅ Serverless函数

**步骤**：

1. **构建项目**
   ```bash
   npm run build
   ```

2. **部署到Netlify**
   - 访问 [netlify.com](https://www.netlify.com)
   - 拖拽 `build/` 文件夹到部署区域
   - 几秒钟后完成部署

3. **或连接Git仓库**（推荐）
   - 在Netlify中点击 "New site from Git"
   - 选择GitHub仓库
   - 配置构建设置：
     - Build command: `npm run build`
     - Publish directory: `build`

---

### 选项3：Cloudflare Pages ⭐⭐⭐⭐⭐

**优点**：
- ✅ 完全免费
- ✅ 无限带宽
- ✅ 全球CDN
- ✅ DDoS防护

**步骤**：

1. **安装Wrangler CLI**
   ```bash
   npm install -g wrangler
   ```

2. **构建项目**
   ```bash
   npm run build
   ```

3. **部署**
   ```bash
   wrangler pages publish build
   ```

4. **或连接Git仓库**
   - 在 [Cloudflare Pages](https://pages.cloudflare.com) 中
   - 选择 "Create a project" -> "Connect to Git"
   - 选择您的仓库并配置

---

### 选项4：GitHub Pages ⭐⭐⭐⭐

**优点**：
- ✅ 完全免费
- ✅ 与GitHub集成
- ✅ 简单易用

**步骤**：

1. **修改 docusaurus.config.js**
   ```javascript
   // 将 baseUrl 改为您的仓库名
   baseUrl: '/semiconductor-docs/',
   
   // 修改 organizationName 和 projectName
   organizationName: 'your-username',
   projectName: 'semiconductor-docs',
   ```

2. **部署**
   ```bash
   npm run deploy
   ```

3. **访问**
   - `https://your-username.github.io/semiconductor-docs/`

---

### 选项5：自建服务器 ⭐⭐⭐

**适用于**：需要完全控制、企业内部部署

**步骤**：

1. **构建项目**
   ```bash
   npm run build
   ```

2. **部署到服务器**
   ```bash
   # 使用scp上传
   scp -r build/* user@server:/var/www/html/
   
   # 或使用rsync
   rsync -avz build/ user@server:/var/www/html/
   ```

3. **配置Web服务器**

   **Nginx配置示例**：
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       root /var/www/html;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

   **Apache配置示例**：
   ```apache
   <VirtualHost *:80>
       ServerName your-domain.com
       DocumentRoot /var/www/html
       
       <Directory /var/www/html>
           RewriteEngine On
           RewriteBase /
           RewriteRule ^index\.html$ - [L]
           RewriteCond %{REQUEST_FILENAME} !-f
           RewriteCond %{REQUEST_FILENAME} !-d
           RewriteRule . /index.html [L]
       </Directory>
   </VirtualHost>
   ```

---

## 🔍 添加 Meilisearch 搜索

### 选项1：Meilisearch Cloud（推荐）

1. **注册账号**
   - 访问 [meilisearch.com](https://www.meilisearch.com)
   - 注册免费账号（10,000文档免费）

2. **创建索引**
   - 在控制台创建新索引
   - 获取API密钥

3. **配置环境变量**
   ```bash
   MEILISEARCH_HOST=https://your-docker-name.meilisearch.com
   MEILISEARCH_API_KEY=your-api-key
   ```

### 选项2：自建 Meilisearch

**使用Docker**：
```bash
docker run -it -p 7700:7700 \
  -v $(pwd)/meilisearch-data:/meili_data \
  getmeili/meilisearch:v1.5
```

**使用Docker Compose**：
```yaml
version: '3.4'
services:
  meilisearch:
    image: getmeili/meilisearch:v1.5
    ports:
      - "7700:7700"
    environment:
      - MEILI_MASTER_KEY=your-master-key
      - MEILI_ENV=production
    volumes:
      - ./meilisearch-data:/meili_data
```

---

## 🤖 配置 AI 集成

### MCP 服务器设置

1. **安装 MCP 服务器**
   ```bash
   npm install @meilisearch/mcp-server
   ```

2. **配置 Claude Desktop**
   
   创建/编辑 `~/Library/Application Support/Claude/claude_desktop_config.json`：
   ```json
   {
     "mcpServers": {
       "semiconductor-docs": {
         "command": "npx",
         "args": ["@meilisearch/mcp-server"],
         "env": {
           "MEILISEARCH_HOST": "https://your-docker-name.meilisearch.com",
           "MEILISEARCH_API_KEY": "your-api-key"
         }
       }
     }
   }
   ```

3. **使用Claude搜索**
   - 现在Claude可以直接搜索您的文档库
   - 例如："搜索关于7nm工艺的文档"

### REST API

提供公开API端点：

```javascript
// api/search.js（Vercel Serverless Function）
const { MeiliSearch } = require('meilisearch');

export default async function handler(req, res) {
  const client = new MeiliSearch({
    host: process.env.MEILISEARCH_HOST,
    apiKey: process.env.MEILISEARCH_API_KEY,
  });

  const results = await client.index('docs').search(req.query.q);
  
  res.json(results);
}
```

---

## 📊 监控和分析

### Google Analytics

1. **注册 GA 账号**
2. **获取跟踪ID**（如 `G-XXXXXXXXXX`）
3. **添加到 docusaurus.config.js**：
   ```javascript
   themeConfig: {
     gtag: {
       trackingID: 'G-XXXXXXXXXX',
       anonymizeIP: true,
     },
   }
   ```

---

## 🔄 CI/CD 自动化

### GitHub Actions

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## ✅ 部署检查清单

部署前检查：

- [ ] 所有页面都能正常访问
- [ ] 搜索功能正常工作
- [ ] 移动端显示正常
- [ ] 没有断开的链接
- [ ] 图片资源加载正常
- [ ] SEO元数据配置正确
- [ ] Google Analytics（如需要）
- [ ] 自定义域名配置（如需要）
- [ ] HTTPS证书正常
- [ ] API密钥安全配置

---

## 🆘 故障排查

### 常见问题

**Q: 部署后页面空白**
- 检查 `baseUrl` 配置
- 检查构建日志
- 清除浏览器缓存

**Q: 图片不显示**
- 检查图片路径
- 确保图片在 `static/` 目录

**Q: 搜索不工作**
- 检查 Meilisearch 连接
- 验证API密钥
- 确认索引已创建

---

## 📞 获取帮助

- Vercel文档: https://vercel.com/docs
- Netlify文档: https://docs.netlify.com
- Docusaurus文档: https://docusaurus.io/docs
- Meilisearch文档: https://docs.meilisearch.com/

---

**祝您部署顺利！** 🚀
