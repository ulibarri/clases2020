var http = require('http');

http.createServer(function (request, response){
    var headers = request.headers;
    var method = request.method;
    var url = request.url;


    console.log('headers: ');
    console.log(headers);

    console.log('\nmethod: ');
    console.log(method);

    console.log('\nurl:');
    console.log(url);

    response.statusCode = 200;
    response.write('hola');//esto aparecera en local host jejeje uwu
    response.end();

}).listen(3000);//se queda escuchando el control.