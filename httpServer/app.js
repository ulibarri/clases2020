
var http = require('http');

http.createServer(function(req, res){

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello world\n');

}).listen(1337, '127.0.0.1');

/*primeramente no noto que suceda algo

Al abrir la ventana del navegador y poner lo de localhost:1337
veo una pagina con el texto "Hello world"

En los headers me llamo la atencion que en el apartado de Elements
muestra un codigo html extraño que obviamente nunca hicimos.
*/