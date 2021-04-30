var express = require('express'); //Importamos dependencia
var app = express(); //Declaramos una app de express

var port = process.env.port || 3000; //Setteamos el puerto con el cual se escuchara el servidor
app.use('/assets', express.static(__dirname + '/pubilc'));
app.use('/', function(req, res, next) {
    console.log('Request Url:' + req.url);
    next();
});

//Primera ruta(esta al nivel de la raiz /), Hello world!
app.get('/', (req, res) => {
    res.send(
        `<html>
            <head>
                <link real ="stylesheet" href="styles.css">
            </head>
            <body>
                <h1>Hello world</h1>
            </body>
        </html>`);
});


app.get('/api', (req, res) => {
    res.json(
        {firstName: "Gabino", lastname: "Morales"}
    )
});

app.get('/person/:id', (req, res) => {
    res.send(`
        <html>
            <head></head>
            <body>
                <h1>Person: ${req.params.id}</h1>
            </body>
        </html>`
    )
})

app.listen(port, () => { //Levantamos el server y lo ponemos a la escucha
    console.log(`Se ha iniciado el servidor correctamente en el puerto ${port}`)
}); 
