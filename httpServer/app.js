var http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello world')
    res.end()

}).listen(1337, '127.0.0.1');

/* 
 * Cuando se ejecuta el node app.js el servidor se activa automaticamente y puedes ingresar con http://localhost:1337
 * cabe mencionar que si quieres cerrar el servidor basta con poner el comando "Cttl + C" o escribir el comando "taskkill /F /IM node.exe"
 * En los headers podemos ver que usamos un metodo GET y el codigo 200 que usamos se encuentra en 'Status Code'
 * tambien podemos ver que el 'Content-Type' que especificamos tambien se encuentra en los headers
 */