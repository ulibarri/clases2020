require('dotenv').config();
const mongoose = require('mongoose')
var link = 'mongodb+srv://LuisEdoardo:Relaxing24@clases-2021.36gxl.mongodb.net/Clases?retryWrites=true&w=majority';

mongoose.connect(process.env.link, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).then(db => console.log('Conectado a la base de datos')).catch(err => console.error(err));

const llantasSchema = mongoose.Schema({
    tamano: String,
    marca: String,
    modelo: String,
})

module.exports = mongoose.model('Llantas', llantasSchema)
