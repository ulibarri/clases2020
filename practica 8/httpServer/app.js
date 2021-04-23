//Lo hice aquí porque instalé http en la carpeta de práctica 8 :)

var http = require('http')

http.createServer(function(req, res) {

    res.writeHead(200, { 'Content-Type' : 'text/plain' })
    res.end('Hola mundo')

}).listen(1337, '127.0.0.1')