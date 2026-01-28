#!/bin/bash

echo "🚀 尝试本地构建..."

# 方法1: 直接使用node_modules中的docusaurus
if [ -f "node_modules/@docusaurus/core/lib/index.js" ]; then
    echo "✅ 找到@docusaurus/core，尝试直接使用..."
    node node_modules/@docusaurus/core/lib/index.js build
    
    if [ $? -eq 0 ]; then
        echo "✅ 构建成功！"
        echo "静态文件在 build/ 目录"
    else
        echo "❌ 构建失败"
    fi
else
    echo "❌ 未找到@docusaurus/core"
fi

# 方法2: 如果方法1失败，尝试使用docusaurus命令
if [ ! -d "build" ]; then
    echo "尝试使用docusaurus命令..."
    npm run build
fi
