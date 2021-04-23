const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => { //route handler

    res
        .status(200)
        .sendFile(path.join(__dirname, "public", "index.html"))
});

app.listen(3000);
app.get('/uno', (req, res) => { 
    res.send('Hello world, from route one');
});

app.get('/prueba', (req, res) => {
    res.send('Hello from route');
})