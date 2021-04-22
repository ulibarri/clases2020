var http = require('http');

http.createServer(function(req,res){

    res.writeHead(200, { 'Content-Type': 'text7plain'});
    res.end('Hello world\n');

}).listen(1337, '127.0.0.1');

// Aparentemente no sucede nada

//Al navegar al sitio "http://localhost:1337" se puede observar el mensaje establecido por este programa (Hello World)