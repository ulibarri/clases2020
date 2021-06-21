let mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Mario:Axel@cluster0.pewhg.mongodb.net/Cluster0?retryWrites=true&w=majority');

let personSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    nacimiento: Date,
    tipoSangre: String
});

module.exports = mongoose.model('Persons',personSchema);


