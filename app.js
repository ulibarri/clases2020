var express = require('express'); //Importamos dependencia
var app = express(); //Declaramos una app de express

var port = process.env.port || 3000; //Setteamos el puerto con el cual se escuchara el servidor
app.use('/assets', express.static(__dirname + '/pubilc'));
app.set('view engine', 'ejs')

//Primera ruta(esta al nivel de la raiz /), Hello world!
app.get('/', (req, res) => {
    res.render('index');
});


app.get('/api', (req, res) => {
    res.json(
        {firstName: "Gabino", lastname: "Morales"}
    )
});

app.get('/person/:id', (req, res) => {
    res.render('person', {ID: req.params.id});
})

app.listen(port, () => { //Levantamos el server y lo ponemos a la escucha
    console.log(`Se ha iniciado el servidor correctamente en el puerto ${port}`)
}); 
