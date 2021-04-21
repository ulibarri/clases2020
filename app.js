var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'content-Type': 'text/plain'});
    res.end('Hello world\n');
}).listen(1337, '127.0.0.1');
/*Ve a la línea de comandos y ejecuta : node app.js, ¿qué sucede?
Se ejecuta el servidor pero no pasa nada mas.
Al abrir el navegador se muestra el hello world. */ 

/*En los headers se encuentra la información de los responses y los request al servidor */