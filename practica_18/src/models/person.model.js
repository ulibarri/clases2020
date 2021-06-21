let mongoose = require('mongoose');

mongoose.connect('mongodb+srv://felipe:felipe@cluster0.i96w5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

let personSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    nacimiento: Date,
    tipoSangre: String
});

module.exports = mongoose.model('Persons', personSchema);