var http = require('http');
// http.createServer(function(req,res) {
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     res.end('Hello world\n');
// }).listen(1337,'127.0.0.1');

var listener = (req,res) => {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello world\n');
}
http.createServer(listener).listen(1337,'127.0.0.1');