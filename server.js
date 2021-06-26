var express = require('express')
var app = express()
var port = process.env.PORT || 3000
app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.send(`<!DOCTYPE html><html lang="en"><head><link rel="stylesheet" href="assets/style.css">
    <title>Document</title> </head>
    <body><h1>Hola Mundo</h1>
    </body> </html>`)
})

app.get('/person/:id', (req, res)=>{
    res.render('person', {ID: req.params.id, Qstr: req.query.qrst})
})

app.listen(port)