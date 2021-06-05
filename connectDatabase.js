const express = require('express');
let app = express();
let PORT = process.env.PORT || 3000;

const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb+srv://root:root123@cluster0.mcviy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true
})
    .then(db => console.log('Conexión con la base de datos exitosa'))
    .catch(err => console.error(err))

app.listen(PORT);