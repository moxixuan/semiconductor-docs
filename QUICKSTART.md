# 快速启动指南

## 5分钟快速启动

### 步骤1：安装依赖（1分钟）

```bash
cd semiconductor-docs
npm install --legacy-peer-deps
```

### 步骤2：启动开发服务器（1分钟）

```bash
npm start
```

等待编译完成后，浏览器会自动打开 http://localhost:3000

### 步骤3：浏览文档（1分钟）

点击导航栏查看不同类别的文档：
- 芯片设计
- 工艺制造
- EDA工具
- 协议标准

### 步骤4：修改文档（1分钟）

```bash
# 编辑任意 .md 文件
vim docs/intro.md

# 保存后会自动刷新浏览器
```

### 步骤5：构建生产版本（1分钟）

```bash
npm run build
```

构建后的文件在 `build/` 目录。

---

## 🎯 下一步

1. **添加自己的文档**
   - 在 `docs/` 目录创建 `.md` 文件
   - 参考现有文档的格式

2. **配置搜索**（可选）
   - 参阅 [DEPLOYMENT.md](./DEPLOYMENT.md)
   - 配置 Meilisearch

3. **部署到Vercel**（推荐）
   - 推送代码到GitHub
   - 在Vercel导入项目
   - 自动部署完成

---

## 📚 更多文档

- [完整部署指南](./DEPLOYMENT.md)
- [README](./README.md)
- [Docusaurus文档](https://docusaurus.io/docs)

---

**开始使用吧！** 🚀
