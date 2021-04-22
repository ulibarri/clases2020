var express = require('express')//importamos la dependencia
var app = express() //Declaramos una app express

var port = process.env.PORT || 3000 //setteamos el puerto para que escuche el servidor

//primera ruta(esta al nivel de la raiz/), Hello world!
app.get('/',function(req, res){
    res.send('<html><head></head><body><h1>Hellow World</h1></body></html>')
})

app.listen(port)//levantar el server y ponerlo a la escucha
//segunda ruta /api, regrsa un objeto JSON
app.get('/api',function(req,res){
    res.json({firstname:'jhon', lastname: 'Doe'})
})

//tercera ruta, recibe un parmetro
app.get('/persona/:id', function(req, res){
    res.send('<html><head></head><body><h1>Person: '+ req.params.id +'</h1></body></html>')
})