const http = require('http');
const fsMod = require('fs');
const path = require('path');

const PORT = 3001;
const DIRECTORY = __dirname;

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.md': 'text/markdown',
  '/': 'text/html',
};

const server = http.createServer((req, res) => {
  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './docs/intro.md';
  }
  
  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = mimeTypes[extname] || 'text/plain';
  
  fsMod.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end('Server Error: ' + err);
      return;
    }
    
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
    });
    res.end(content);
  });
});

console.log('================================');
console.log('  🌐 简易HTTP服务器已启动');
console.log('================================');
console.log('');
console.log('  📂 访问地址：');
console.log('');
console.log('  ✅ http://0.0.0.0:' + PORT);
console.log('  ✅ http://' + require('os').networkInterfaces().eth0?.[0]?.address + ':' + PORT);
console.log('  ✅ http://172.17.0.1:' + PORT);
console.log('');
console.log('  📁 监听目录：' + DIRECTORY);
console.log('================================');
console.log('');
console.log('  提示：按 Ctrl+C 停止服务器');
console.log('================================');

server.listen(PORT, '0.0.0.0', () => {
  console.log('');
  console.log('  ✅✅ 服务器已成功启动！');
  console.log('  🚀 现在可以在浏览器访问');
  console.log('');
});
