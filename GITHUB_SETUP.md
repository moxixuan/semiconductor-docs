# GitHub 仓库配置指南

## 快速开始

### 自动化脚本（推荐）

```bash
# 运行自动化脚本
./git-init.sh

# 脚本会引导您完成：
# 1. 初始化Git仓库
# 2. 配置用户信息
# 3. 提交文件
# 4. 推送到GitHub
```

---

## 手动配置

### 步骤1：创建GitHub仓库

1. **登录GitHub**
   - 访问 https://github.com/new
   - 登录您的账号

2. **创建新仓库**
   - Repository name: `semiconductor-docs`
   - Description: `专业的半导体技术文档检索平台`
   - Public ✅ 公开
   - Private ☐ 私有（如需要）
   - Initialize with: ☐ 不初始化README
   - Add .gitignore: ☐ 不添加

3. **创建仓库**
   - 点击 "Create repository"

### 步骤2：初始化Git（在项目目录）

```bash
cd ~/semiconductor-docs

# 初始化Git
git init

# 配置用户信息（首次）
git config user.name "Your Name"
git config user.email "your.email@example.com"

# 创建main分支
git branch -M main
```

### 步骤3：添加文件并提交

```bash
# 添加所有文件
git add .

# 创建首次提交
git commit -m "Initial commit: Semiconductor Knowledge Base MVP

- 完整的Docusaurus项目结构
- 15+篇半导体技术文档
- 响应式UI设计
- 完整的部署指南"
```

### 步骤4：连接远程仓库

```bash
# 添加GitHub远程仓库
git remote add origin https://github.com/your-username/semiconductor-docs.git

# 验证远程仓库
git remote -v
```

### 步骤5：推送到GitHub

```bash
# 推送到main分支
git push -u origin main
```

**认证方式**：

#### 选项1：SSH密钥（推荐）
```bash
# 生成SSH密钥（如果没有）
ssh-keygen -t ed25519 -C "your.email@example.com"

# 查看公钥
cat ~/.ssh/id_ed25519.pub

# 添加到GitHub：
# Settings → SSH and GPG keys → New SSH key
# 粘贴公钥

# 测试连接
ssh -T git@github.com
```

#### 选项2：Personal Access Token
```bash
# 生成Token（Settings → Developer settings → Personal access tokens）
# Token scopes: 至少勾选 'repo'
# 使用Token代替密码

# 推送时使用：
git push https://your-token@github.com/your-username/semiconductor-docs.git
```

---

## GitHub仓库管理

### 配置仓库设置

访问仓库页面后，可以配置：

#### General设置
- Repository name: 修改仓库名
- Description: 更新描述
- Website: 添加项目网站链接
- Default branch: 设置为main
- Features:
  - [ ] Issues: 启用问题跟踪
  - [ ] Wiki: 启用Wiki
  - [ ] Projects: 启用项目管理
  - [ ] Discussions: 启用讨论

#### 安全设置
- Security: 
  - Branch protection rules: 保护main分支
  - Code owners: 指定代码审查者
  - Deploy keys: 添加部署密钥

#### 社交功能
- **Stargazers**: 用户可以星标仓库
- **Watchers**: 用户可以关注仓库
- **Forks**: 用户可以Fork仓库

### GitHub Pages设置（备选部署方案）

如果使用GitHub Pages部署：

```bash
# 1. 修改docusaurus.config.js
# baseUrl: '/semiconductor-docs/',
# organizationName: 'your-username',
# projectName: 'semiconductor-docs',

# 2. 部署
npm run deploy
```

访问地址：`https://your-username.github.io/semiconductor-docs/`

---

## 常用Git命令

```bash
# 查看状态
git status

# 查看提交历史
git log --oneline

# 查看远程仓库
git remote -v

# 查看分支
git branch -a

# 创建新分支
git checkout -b feature/new-docs

# 合并分支
git merge feature/new-docs

# 删除分支
git branch -d feature/new-docs
```

---

## 工作流建议

### 开发流程

```
main分支（生产）   ←───┐
                     │
develop分支（开发）←───┘
                     │
   feature/*分支（功能）
```

### 提交信息规范

```bash
# feat: 新功能
git commit -m "feat: 添加7nm工艺设计指南"

# fix: 修复bug
git commit -m "fix: 修复导航栏在移动端不显示的问题"

# docs: 文档更新
git commit -m "docs: 更新Design Compiler使用指南"

# style: 代码格式
git commit -m "style: 调整代码缩进"

# refactor: 重构
git commit -m "refactor: 优化搜索功能"

# test: 测试
git commit -m "test: 添加单元测试"

# chore: 构建/工具
git commit -m "chore: 更新依赖到最新版本"
```

---

## 最佳实践

### 1. 提交粒度
- 一个提交只做一件事
- 频繁提交比大批量提交好

### 2. 分支策略
- main分支始终可部署
- develop分支进行开发
- feature分支开发新功能

### 3. 代码审查
- 使用Pull Request而非直接push
- 至少一人审查
- 自动化CI检查

### 4. 文档提交
```bash
# 添加文档
git add docs/new-topic.md
git commit -m "docs: 添加新文档[category/topic]"

# 更新配置
git add docusaurus.config.js sidebars.js
git commit -m "config: 更新导航配置"
```

---

## 故障排查

### Q1: 推送失败 - Permission denied

**解决**：
```bash
# 检查SSH密钥
ssh -T git@github.com

# 或使用Token
git push https://token@github.com/your-repo.git
```

### Q2: 推送失败 - Repository not found

**解决**：
```bash
# 确保仓库已在GitHub创建
# 检查仓库URL是否正确
git remote -v
```

### Q3: 大文件推送失败

**解决**：
```bash
# 配置Git缓冲区
git config http.postBuffer 524288000

# 或使用Git LFS（大文件存储）
```

---

## 相关资源

- [GitHub文档](https://docs.github.com/)
- [Git参考手册](https://git-scm.com/doc)
- [Pro Git书籍](https://git-scm.com/book/zh/v2/)
