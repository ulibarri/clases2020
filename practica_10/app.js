const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.get('/', function(req, res) {
  res.send('<html><head></head><body><h1>Hello world</h1></body></html>')
})

app.get('/api', function(req, res) {
  res.json({firstname: 'John', lastname: 'Wick'})
})

app.get('/person/:user', function(req, res){
  res.send('<html><head></head><body><h1>Person: ' + req.params.user + '</h1></body></html>')
})

app.listen(port)
