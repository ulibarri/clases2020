let mongoose = require('mongoose');
mongoose.connect('mongodb+srv://root:root123@cluster0.mcviy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

let personSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    nacimiento: Date,
    tipoSangre: String
});

module.exports = mongoose.model('Persons',personSchema);













