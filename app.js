var express = require('express')
var app = express()

var port = process.env.PORT || 3000

app.get('/', function(req, res) {
    res.send('<html><head></head><body><h1>Hello world</h1></body></html>')
})

app.listen(port)
app.get('/api', function(req, res) {
    res.json({firstname: 'John', lastname: 'Doe'})
})

app.get('/person/:edgar', function(req, res){
    res.send('<html><head></head><body><h1>Person: ' + req.params.edgar + '</h1></body></html>')
})