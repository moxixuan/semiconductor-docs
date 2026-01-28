#!/bin/bash

echo "🚀 启动静态HTTP服务器"
echo ""

# 检查build目录
if [ -d "build" ]; then
    echo "使用现有的build目录"
    SERVE_DIR="build"
elif [ -d ".docusaurus" ]; then
    echo "使用.docusaurus缓存目录"
    SERVE_DIR=".docusaurus"
else
    echo "⚠️  build目录不存在，启动开发服务器..."
    cd /home/moxixuan/semiconductor-docs
    npm start 2>&1 | grep -v "File is not defined" | head -20
    exit $?
fi

# 查找Python
PYTHON_CMD=""
if command -v python3 &> /dev/null; then
    PYTHON_CMD="python3"
elif command -v python &> /dev/null; then
    PYTHON_CMD="python"
else
    echo "❌ 未找到Python，无法启动HTTP服务器"
    echo "请先构建项目：npm run build"
    exit 1
fi

# 启动HTTP服务器
echo ""
echo "启动HTTP服务器监听 0.0.0.0:3000"
echo "访问地址: http://0.0.0.0:3000"
echo ""

$PYTHON_CMD -m http.server 3000 --bind 0.0.0.0 --directory "$SERVE_DIR"
