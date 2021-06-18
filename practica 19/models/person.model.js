let mongoose = require('mongoose');
// inyeccion de la dependencia
mongoose.connect('mongodb+srv://elopez40:eduardo2021@cluster0.6zlp9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
// cadena de conexion

let personSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    nacimiento: Date,
    tipoSangre: String

});
// esquema

module.exports = mongoose.model('Persons',personSchema);
// modelo
