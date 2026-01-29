#!/bin/bash
set -e

echo "🚀 开始部署到GitHub Pages..."
npx gh-pages -d build -m "Deploy: 全部159个章节启用双栏PDF查看器 [skip ci]"

echo "✅ 部署成功！"
echo "🌐 访问: https://moxixuan.github.io/semiconductor-docs/"
echo "📝 测试: https://moxixuan.github.io/semiconductor-docs/docs/standards/semi/semi-chapter-035"
