var http = require('http');

/*http.createServer(function(req, res){

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('hello world\nhola');

}).listen(1337, '127.0.0.1');*/

http.createServer((req, res)=>{

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('hello world\nhola');

}).listen(1337, '127.0.0.1');