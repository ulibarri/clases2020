const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send('Hola mundo, this is the root route')
}) 


app.listen(3000)
app.get('/uno', (req, res) => {
    res.send('Hola mundo, from route one')
})


app.listen(3000)
app.get('/prueba', (req,res) => {
    res.send('Hola mundo, esta es mi ruta de prueba')
}) 