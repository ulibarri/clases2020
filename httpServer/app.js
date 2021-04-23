var http = require('http');
let puerto = '1337';
let localhost = '127.0.0.1';

http.createServer(function(req, res){

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello world \n');

}).listen(puerto, localhost, () => {
    console.log(`El servidor esta funcionando ${puerto} ${localhost}`)
})