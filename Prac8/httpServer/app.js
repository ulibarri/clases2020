var http = require('http');

http.createServer(function(req, res){

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello world\n');

}).listen(1337, '127.0.0.1');

/* al ir a localhost:1337 con las herramientas de navegador abiertas, podemos apreciar que en la página hay un Hello World,
en la sección de los Headers lo que hay es lo siguiente: 
Connection: keep-alive
Content-Type: text/plain
Date: Tue, 27 Apr 2021 06:15:22 GMT
Keep-Alive: timeout=5
Transfer-Encoding: chunked
----------------------------------------
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,/;q=0.8,application/signed-exchange;v=b3;q=0.9
Accept-Encoding: gzip, deflate, br
Accept-Language: es-419,es;q=0.9
Cache-Control: max-age=0
Connection: keep-alive
Host: localhost:1337
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: none
Sec-Fetch-User: ?1
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36 OPR/73.0.3856.438
*/