const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://alberto:<password>@cluster0.flkul.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const personScheme = new mongoose.Schema({
    nombre: String,
    edad: Number,
    nacimiento: Date,
    tipoSangre: String
});

module.exports = mongoose.model('Persons', personScheme);