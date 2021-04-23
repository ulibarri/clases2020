const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.send('Hello world, this is the root router');
});


app.listen(300);
app.get('/uno', (req, res) => { 
    res.send('Hello World, from route One');
});

app.get('/prueba', (req,res) => {
    res.sendFile(path.join(__dirname + '/prueba.html'));
})