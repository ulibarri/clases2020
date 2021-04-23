const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req,res)=>{//route handler
    res.send('hello world, this is the root route')
});

app.listen(3000);
app.get('/uno', (req,res)=>{//route handler
    res.send('hello world, from route one')
});

app.get('/prueba', (req, res)=> {//route handler
    res.sendFile(path.join(__dirname + '/html/a.html'))
});