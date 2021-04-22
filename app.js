const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    //route handler
    res.send('Hello World, this is the root route');
});

app.get('/uno', (req, res) => {
    //route handler
    res.send('Hello World, from route one');
});

app.get('/prueba', (req, res) => {
    //route handler
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(3000);

