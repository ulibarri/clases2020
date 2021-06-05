
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://edsonRgovea:edson123@cluster0.77ges.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(database => console.log('Conectado a la BD'))
    .catch(err => console.error(err));

const pedidosScheme = mongoose.Schema({
    plato: String,
    bebida: String,
    tipo: String
});

module.exports = mongoose.model('Pedidos', pedidosScheme);