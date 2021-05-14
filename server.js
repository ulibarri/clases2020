const express = require('express');
let app = express();
let PORT = process.env.PORT || 3000;
app.use('/assets',express.static(__dirname + '/public'));

app.set('view engine', 'ejs')


app.get('/',(req,res)=>{
    res.send(`<!DOCTYPE html> <htm lang='eng'> <head> <link rel="stylesheet" href="/assets/style.css" type="text/css"/> 
    <title>Document</title> </head>
    <b> <h1>Hola Mundo!</h1>`)
});

app.get('/person/:id', (req,res) => {
    res.render('person', {ID: req.params.id, Qstr: req.query.qrst})
});

app.listen(PORT);