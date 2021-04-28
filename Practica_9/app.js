const express = require('express');
const app = express();

app.get('/', (req, res) => {//route handler
    res.send('hello world, this is the root route');
})

app.listen(3000)
app.get('/uno', (req, res) => {//route handler
    res.send('Hello world, from route One');
})

app.get('/prueba', (req, res) => {//route handler
    res.sendFile(path.join(__dirname, '/prueba/test.html'))
})