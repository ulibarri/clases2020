const http = require('http');

http.createServer((_, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hey men\nNew Line')

}).listen.listen({
  host: 'localhost',
  port: 80
})
