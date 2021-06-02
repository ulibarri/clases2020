require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).then(() => console.log(`Conectado a la base de datos 'Prueba'`)).catch(err => console.error(err));

const citasScheme = mongoose.Schema({
    nombre: String,
    ubicacion: String,
    date: Date
});

module.exports = mongoose.model('Citas', citasScheme);