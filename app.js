var express = require('express'); //Importamos dependencia
var app = express(); //Instanciamos la dependencia

var port = process.env.port || 3000; //Indicamos el puerto con el cual se escuchara el servidor

//Primera ruta(esta al nivel de la raiz /), Hello world
app.get('/', (req, res) => {
    res.send(
        `<html>
            <head>
                <body>
                    <h1>Hello world</h1>
                </body>
            </head>
        </html>`);
});


//Ruta 2, regresa un JSON
app.get('/api', (req, res) => {
    res.json(
        {"firstName": "Juan", "lastname": "Michel"}
    )
});

//Ruta 3, recibe un parametro
app.get('/person/:id', (req, res) => {
    res.send(`
        <html>
            <head>
                <body>
                    <h1>Person: ${req.params.id}</h1>
                </body>
            </head>
        </html>`
    )
})

app.listen(port, () => { //Levantamos el server y lo ponemos a la escucha
    console.log(`Se ha iniciado el servidor correctamente en el puerto ${port}`)
}); 


