const express = require('express')
const app = express()

app.get('/',(req, res)=>{
    res.send('Hello world, this is the root route')
})

app.listen(3000)
app.get('/uno', (req,res)=>{
    res.send('Hellow world, frome route one')
})

app.get('/prueba', (req, res)=>{
    res.send('Hello, frome route Prueba ')
})