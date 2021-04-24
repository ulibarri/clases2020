const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {//route handlers
    res.send('Hello world, this is the root route');
});

app.listen(3000);
app.get('/uno', (req, res) => {
    res.send('Hello world, from route One');
});

app.get('/prueba', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})