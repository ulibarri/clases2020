require('dotenv').config()
let mongoose = require('mongoose');

mongoose.connect('mongodb+srv://LuisEdoardo:Relaxing24@clases-2021.36gxl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

let personSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    nacimiento: Date,
    tipoSangre: String
});

module.exports = mongoose.model('Persons', personSchema);