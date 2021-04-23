const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello world, this is the root route');
});

app.listen(3000);
app.get('/uno', (req, res) => {//route handler
    res.send('Hello World, from route One')
})

app.get('/prueba', (req, res) => { //route handler
    res.send('Hello World, from route Prueba');
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname + '/htmls/home.html'));
});

app.listen(port);

