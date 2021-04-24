const express = require('express')
const app = express()

app.get('/', (_, res) => {
    res.send('hello world, this is the root route')
})

app.get('/uno', (_, res) => {
  res.send('Hello world, from route one')
})

app.get('/prueba', (_, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(3000)
