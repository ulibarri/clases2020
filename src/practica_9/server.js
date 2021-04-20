const express = require('express');
const app = express();
app.get('/', (_, res) => {
  res.send('Hello world');
});
app.get('/prueba', (_, res) => {
  res.send('<h1>Hola desde h1 en prueba</h1>');
});
app.listen(3000, () => console.log('Listening on port 3000'));
