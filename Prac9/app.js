const express = require('express');
const app = express();

app.get('/', (req, res)=> {//route handler
    res.send('Hello World, this is the root route');
});

/*-----------------------------------------------------*/
app.get('/prueba', (req, res)=> {//route handler
    res.send('Hola a todos, esta es la de prueba');
});
/*-----------------------------------------------------*/

app.listen(3000);
app.get('/uno', (req, res)=> {//route handler
    res.send('Hello World, from route One');
});

