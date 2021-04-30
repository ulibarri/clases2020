let express = require('express');
let app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', (req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    next();
})


app.get('/', (req, res) => {
    res.send(`
    <html>
        <head>
            <link href="assets/style.css" type="text/css" rel="stylesheet"/>
        </head>
        <body>
            <h1>
                Hello world!
            </h1>
        </body>
    </html>
    `);
});

app.get('/person/:id', (req, res) => {
    res.send(`
        <html>
            <head>
            </head>
            <body>
                <h1>Person: ${req.params.id}</h1>
            </body>
        </html>
    `);
});


app.get('/api', (req, res) => {
    res.json({firstname: 'Juan', lastname: 'Michel'})
})

app.listen(port, () => {
    `El servidor ha arrancado correctamente en el puerto ${port}`;
});