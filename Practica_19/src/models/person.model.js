let mongoose = require('mongoose');
//inyeccion de la dependencia
mongoose.connect('mongodb+srv://');
//cadena de conexion

let personSchema = new mongoose.Schema({
  nombre: String,
  edad: Number,
  nacimiento: Date,
  tipoSangre: String
});
//esquema

module.exports = mongoose.model('Persons', personSchema);
//modelo