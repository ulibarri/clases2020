const { Schema, model } = require('mongoose');

const PersonSchema = new Schema({
  nombre: String,
  edad: Number,
  nacimiento: String,
  tipoSange: String,
});
module.exports = model('Personas', PersonSchema);
