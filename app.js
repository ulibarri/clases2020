const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello world, this is the root route');
});

app.get('/prueba', (req, res) => { //route handler
    res.send('hello world, from route prueba');
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname + '/htmls/home.html'));
});

app.listen(port);

