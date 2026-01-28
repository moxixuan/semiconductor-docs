#!/bin/bash

# ============================================
# Git初始化和推送脚本
# ============================================

echo "🚀 Git初始化脚本"
echo ""

# 颜色
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

# 获取仓库信息
echo -e "${BLUE}📝 配置仓库信息${NC}"
read -p "GitHub用户名: " GITHUB_USERNAME
read -p "仓库名称 (默认: semiconductor-docs): " REPO_NAME
REPO_NAME=${REPO_NAME:-semiconductor-docs}

read -p "提交信息 (默认: Initial commit): " COMMIT_MSG
COMMIT_MSG=${COMMIT_MSG:-Initial commit}

echo ""
echo "配置信息："
echo "  用户名: $GITHUB_USERNAME"
echo "  仓库名: $REPO_NAME"
echo "  提交信息: $COMMIT_MSG"
echo ""

REPO_URL="https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"

# ============================================
# 初始化Git仓库
# ============================================

echo -e "${BLUE}📦 步骤1: 初始化Git仓库${NC}"

if [ -d ".git" ]; then
    echo -e "${YELLOW}⚠️  Git已初始化${NC}"
    echo "  如果要重新初始化，先删除.git目录"
    echo ""
    read -p "是否继续使用现有Git? (y/n) " -n 1 -r
    echo
    if [[ $REPLY != "y" ]]; then
        exit 1
    fi
else
    echo -e "${GREEN}✅ Git初始化${NC}"
    git init
fi

# ============================================
# 配置Git
# ============================================

echo ""
echo -e "${BLUE}⚙️  步骤2: 配置Git${NC}"

read -p "设置作者姓名: " AUTHOR_NAME
if [ ! -z "$AUTHOR_NAME" ]; then
    git config user.name "$AUTHOR_NAME"
    echo -e "${GREEN}✅ 作者姓名已设置${NC}"
fi

read -p "设置邮箱: " AUTHOR_EMAIL
if [ ! -z "$AUTHOR_EMAIL" ]; then
    git config user.email "$AUTHOR_EMAIL"
    echo -e "${GREEN}✅ 邮箱已设置${NC}"
fi

# ============================================
# 添加文件
# ============================================

echo ""
echo -e "${BLUE}➕ 步骤3: 添加文件到Git${NC}"

git add .
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ 文件已添加${NC}"
else
    echo -e "${RED}❌ 添加文件失败${NC}"
    exit 1
fi

# ============================================
# 提交
# ============================================

echo ""
echo -e "${BLUE}💾 步骤4: 创建提交${NC}"

git commit -m "$COMMIT_MSG"
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ 提交成功: $COMMIT_MSG${NC}"
else
    echo -e "${RED}❌ 提交失败${NC}"
    exit 1
fi

# ============================================
# 创建main分支
# ============================================

echo ""
echo -e "${BLUE}🌿 步骤5: 创建main分支${NC}"

git branch -M main
echo -e "${GREEN}✅ 主分支已设置${NC}"

# ============================================
# 添加远程仓库
# ============================================

echo ""
echo -e "${BLUE}🔗 步骤6: 添加远程仓库${NC}"

if git remote get-url origin > /dev/null 2>&1; then
    echo -e "${YELLOW}⚠️  远程仓库已存在${NC}"
    read -p "是否更新远程地址? (y/n) " -n 1 -r
    echo
    if [[ $REPLY == "y" ]]; then
        git remote set-url origin "$REPO_URL"
        echo -e "${GREEN}✅ 远程地址已更新${NC}"
    fi
else
    git remote add origin "$REPO_URL"
    echo -e "${GREEN}✅ 远程仓库已添加${NC}"
fi

# ============================================
# 推送到GitHub
# ============================================

echo ""
echo -e "${BLUE}📤 步骤7: 推送到GitHub${NC}"
echo ""
echo -e "${YELLOW}准备推送...${NC}"
echo "  仓库: $REPO_URL"
echo ""

# 检查SSH配置
if command -v ssh &> /dev/null; then
    SSH_KEY=$(ssh-add -l | head -n1)
    if [ -n "$SSH_KEY" ]; then
        echo -e "${GREEN}✅ 检测到SSH密钥，将使用SSH推送${NC}"
    fi
fi

# 推送
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✅✅✅ 推送成功！${NC}"
    echo ""
    echo "仓库地址: https://github.com/$GITHUB_USERNAME/$REPO_NAME"
    echo ""
else
    echo ""
    echo -e "${RED}❌ 推送失败${NC}"
    echo ""
    echo "可能的原因："
    echo "  1. 仓库还未在GitHub创建"
    echo "  2. 认证失败"
    echo "  3. 网络问题"
    echo ""
    echo "解决方案："
    echo "  1. 先访问 https://github.com/new 创建仓库"
    echo "  2. 配置SSH密钥或Personal Access Token"
    echo ""
    read -p "重试推送? (y/n) " -n 1 -r
    echo
    if [[ $REPLY == "y" ]]; then
        git push -u origin main
    fi
fi

# ============================================
# 下一步提示
# ============================================

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${BLUE}================================${NC}"
    echo -e "${BLUE}✨ 下一步：部署到Vercel${NC}"
    echo -e "${BLUE}================================${NC}"
    echo ""
    echo "1. 访问 https://vercel.com"
    echo "2. 使用GitHub账号登录"
    echo "3. 点击 'New Project'"
    echo "4. 选择仓库: $REPO_NAME"
    echo "5. 点击 'Import'"
    echo ""
    echo -e "${GREEN}🎉 Git设置完成！${NC}"
fi
