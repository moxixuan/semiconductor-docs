#!/bin/bash
set -e

echo "🔨 开始本地构建..."
npm run build

echo "📦 部署到 gh-pages 分支..."
# 检查是否已安装 gh-pages
if ! npm list gh-pages > /dev/null 2>&1; then
  echo "📥 安装 gh-pages 工具..."
  npm install gh-pages --save-dev
fi

# 部署到 gh-pages
npx gh-pages -d build -m "Deploy to GitHub Pages [skip ci]"

echo "✅ 部署成功！"
echo "🌐 访问: https://moxixuan.github.io/semiconductor-docs/"
