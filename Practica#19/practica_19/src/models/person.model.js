let mongoose = require('mongoose');
mongoose.connect('mongodb+srv://bda:bda@bda-restaurant.2lacn.mongodb.net/TEST?retryWrites=true&w=majority');

let personSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    nacimiento: Date,
    tipoSangre: String
});

module.exports= mongoose.model('Persons', personSchema);

