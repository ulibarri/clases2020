const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (_, res) => {
  res.send(`<html>
  <head>
    <link rel="stylesheet" href="assets/style.css" />
  </head>
  <body>
    <h1>Hello world!</h1>
  </body>
  </html>`);
});
app.get('/api', (_, res) => {
  res.json({ firstName: 'Ulises', lastName: 'Ramirez' });
});
app.get('/person/:id', (req, res) => {
  const id = req.params.id;
  res.send(`<html><head></head><body><h1>Person ${id}</h1></body></html>`);
});
app.use('/assets', express.static(__dirname + '/public'));
app.listen(port, () => console.log('Listening on port', port));
