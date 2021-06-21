let mongoose = require("mongoose");

let personSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    nacimiento: Date,
    tipoSangre: String
});

mongoose.connect('mongodb+srv://UsuarioGabino:<password>@cluster0.k0b4z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

module.exports = mongoose.model('Persons', personSchema);
