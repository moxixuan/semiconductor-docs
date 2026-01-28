#!/bin/bash

# ============================================
# 半导体知识文档库 - 快速启动脚本
# ============================================

echo "🚀 开始设置半导体知识文档库..."
echo ""

# 颜色定义
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# ============================================
# 检查Node.js版本
# ============================================

echo -e "${BLUE}📋 步骤1: 检查Node.js版本${NC}"
NODE_VERSION=$(node --version 2>/dev/null || echo "未安装")

if [[ $NODE_VERSION == "未安装" ]]; then
    echo -e "${RED}❌ Node.js未安装${NC}"
    echo "请先安装Node.js: https://nodejs.org/"
    exit 1
fi

echo "当前Node.js版本: $NODE_VERSION"

# 检查版本是否>=20.0
REQUIRED_VERSION="20.0.0"
if [[ "$(printf '%s\n' "$REQUIRED_VERSION" "$NODE_VERSION" | sort -V | head -n1)" != "$REQUIRED_VERSION" ]]; then
    echo -e "${YELLOW}⚠️  Node.js版本过低，需要 >= 20.0.0${NC}"
    echo ""
    echo -e "${BLUE}请升级Node.js:${NC}"
    echo ""
    echo "macOS:"
    echo "  brew install node@20"
    echo "  nvm use 20"
    echo ""
    echo "Windows:"
    echo "  从 https://nodejs.org/ 下载安装 Node 20+"
    echo ""
    echo "Linux:"
    echo "  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -"
    echo ""
    read -p "是否继续？(y/n) " -n 1 -r
    echo
    if [[ $REPLY != "y" ]]; then
        exit 1
    fi
else
    echo -e "${GREEN}✅ Node.js版本符合要求${NC}"
fi

echo ""

# ============================================
# 安装依赖
# ============================================

echo -e "${BLUE}📦 步骤2: 安装项目依赖${NC}"
npm install --legacy-peer-deps

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ 依赖安装成功${NC}"
else
    echo -e "${RED}❌ 依赖安装失败${NC}"
    exit 1
fi

echo ""

# ============================================
# 启动开发服务器
# ============================================

echo -e "${BLUE}🚀 步骤3: 启动开发服务器${NC}"
echo "项目将在 http://localhost:3000 启动"
echo ""
echo -e "${YELLOW}按 Ctrl+C 停止服务器${NC}"
echo ""

npm start

# ============================================
# 后续步骤提示
# ============================================

if [ $? -ne 0 ]; then
    echo ""
    echo -e "${BLUE}================================${NC}"
    echo -e "${BLUE}后续操作步骤：${NC}"
    echo ""
    echo -e "${GREEN}1. 添加您的文档${NC}"
    echo "   在 docs/ 目录创建 .md 文件"
    echo "   参考 docs/intro.md 的格式"
    echo ""
    echo -e "${GREEN}2. 更新侧边栏${NC}"
    echo "   编辑 sidebars.js 添加新文档"
    echo ""
    echo -e "${GREEN}3. 部署到Vercel${NC}"
    echo "   git init"
    echo "   git add . && git commit -m 'Initial commit'"
    echo "   git push -u origin main"
    echo "   然后在 Vercel 导入项目"
    echo ""
fi

echo -e "${GREEN}🎉 设置完成！${NC}"
