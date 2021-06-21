let mongoose = require('mongoose');
//inyeccion de la dependencia
mongoose.connect('mongodb+srv://kenia:kenia@cluster0.nv32u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
//Cadena de conexion

let personSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    nacimiento: Date,
    tipoSangre: String
});
//esquema

module.exports = mongoose.model('Persons',personSchema);
//modelo