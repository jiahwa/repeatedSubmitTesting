const http = require('http');

// 创建本地服务器来从其接收数据
const server = http.createServer((req, res) => {
res.writeHead(200, { 'Content-Type': 'application/json' });
res.end(JSON.stringify({
    data: 'Hello World!'
  }));

// res.writeHead(200, { 'Content-Type': 'text/html' });
// res.end('<p>Hello World!</p>')
});

server.listen(8000);

console.log('Server is running at http://127.0.0.1:8000/');