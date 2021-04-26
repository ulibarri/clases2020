var http = require('http');

//Creará un servidor local
http.createServer((req, res) => {

    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('hello world two\nhola')

}).listen(1337,'127.0.0.1')