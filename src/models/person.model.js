let mongoose = require('mongoose');
mongoose.connect('mongodb+srv://juan123:juan123@cluster0.fpghz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

let personSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    nacimiento: Date,
    tipoSangre: String
})


module.exports = mongoose.model('Persons', personSchema); //Modelo
