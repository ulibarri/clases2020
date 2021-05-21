let express = require('express');
let app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');

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

app.get('/student', (req, res) => {
    res.render('index.ejs');
})

// app.get('/person/:id', (req, res) => {
//     res.render(
//             'Person', {
//                 ID: req.params.id,
//                 op: req.query.qrst
//             });
// });


app.post('/student', (req, res) => {
    res.send(`Firts name es: ${req.body.fname}, last name es: ${req.body.lname}`);
});


app.listen(port, () => {
    `El servidor ha arrancado correctamente en el puerto ${port}`;
});
