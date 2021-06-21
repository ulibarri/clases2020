const express = require('express');
let app = express();
const routes = require('./routes/paciente');

const PORT = process.env.PORT || 4000;

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Servidor funcionando correctamente en el puerto ${PORT}`);
})

