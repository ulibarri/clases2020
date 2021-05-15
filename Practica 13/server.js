const express = require('express'); //importamos la dependencia
let app = express(); //declaramos una App de express
let PORT = process.env.PORT || 3000; //setteamos el puerto para que escuche el servidor 
app.use('/assets', express.static(__dirname + '/public'))

app.set('view engine', 'ejs');


app.get('/',(req,res)=>{
    res.send( `<!DOCTYPE html>
    <html lang="en">
    <head><link rel="stylesheet" href="/assets/style.css">
    <title>Document</title></head>
    <body> <h1>Hola mundo </h1>
    <p> Este es un parrafo y su contenido debe ser azul</p></body></html>`);
} );


app.get('/person/:id', (req,res)=>{
    res.render('person',{ID: req.params.id, Qstr: req.query.qrst});
}); 

app.listen(PORT);