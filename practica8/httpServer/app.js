var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello world\n');;
}).listen(1337, 'localhost');

/*
Ve a la línea de comandos y ejecuta : node app.js, ¿qué sucede?
Carga para crear el servidor local.
*/
/*
Abre una nueva ventana del navegador, y deja visibles las “herramientas para
el desarrollador”
¿Qué es lo que sucede?
Se muestra el texto de mi servidor local.
*/
/*
Revisa la sección de los headers
¿qué es lo que hay ahí?
Se observan los datos básicos de request y response
*/