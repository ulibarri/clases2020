var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Hello world\nMy name is Ivan')
}).listen(1337, 'localhost')

/* 
Al acceder a localhost:1337 encontramos lo que hemos escritor en la linea 5.
Si entramos a los headers encontraremos datos básicos de de los requests y responses
*/