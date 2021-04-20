const http = require('http');
http
  .createServer((_, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello world');
  })
  .listen(1337, 'localhost');
