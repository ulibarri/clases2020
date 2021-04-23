const express = require('express');
const app = express();
const path = require('path');

app.listen(3000);
app.get('/', (req,res) => {
    res.send('hello World, this is the root route');
});

app.get('/uno', (req,res) => {
    res.send('hello World, from route One');
});

app.get('/prueba', (req,res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});
