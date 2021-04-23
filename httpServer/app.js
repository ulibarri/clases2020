var http = require('http');

//http.createServer(function(req, res) { 
//Esta era la función original, ahora la refactorizamos con la notación de la flecha
http.createServer((req,res) => { //Función en forma de flecha

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');

}).listen(1337, '127.0.0.1');

//7. Al ir al navegador e introducir localhost:1337 nos redirige a una pagina web con la palabra Hello world, tal y como lo hicimos.
//Esto quiere decir que accedemos al servidor http que creamos desde la consola.
//
//8. En la sección de los headers encontramos la información del servidor http, ahi podemos encontrar
//los datos que describimos en la linea 7 en donde especificamos el tipo de contenido como texto plano y
//el Status code con el numero de puerto que asignamos y en este caso la dirección