var http = require('http');

let port = '9000';
let localhost = '127.0.0.1';

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.end('Hello World');

}).listen(port, localhost, () => {
    console.log(`el servidor anda jalando ${port} ${localhost}`);
});

//Que es lo que sucede? Encontramos el texto escrito en la linea 9;

//Que es lo que hay ahi? Encontramos informacion como el status = 200, el tipo de info = text plain, el metodo usado: GET etc etc.

//Nota: Tuve que cambiar el numero de puerto ya que no me esta funcionando el servidor, me salia un status 426. Ademas, agregue un callback para comprbar que si estuviera ejecutandose el metodo listen.