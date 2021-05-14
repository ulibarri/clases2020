const express = require('express'); //inyeccion de la dependencia
let app = express();
let PORT = process.env.PORT || 3000; //Definicion del puerto de escucha
app.use('/assets', express.static(__dirname + '/public')); //contenido estatico

app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.send(`<!DOCTYPE html> <html lang="en"> <head><link rel="stylesheet" href="/assets/style.css">
    <title>Document</title> </head>
    <body> <h1>Hola, bienvenido a la raiz de la Practica#14</h1> </body> </html>`)
});

app.get('/person/:id',(req,res)=>{
    res.render('person',{ID: req.params.id, 
        msg: req.query.message, 
        time: req.query.time});
});

app.listen(PORT);



