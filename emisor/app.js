var Emisor = require('./emisor');

var emi = new Emisor();

emi.on('greet', () => {
    console.log('En algun lado, alguien dijo hola');
});

emi.on('greet', () => {
    console.log('Ha ocurrido un greet!');
});

console.log('Hello!');
emi.emit('greet');

emi.on('jump', () => {
    console.log('Alguien salto!');
})

console.log(emi);
emi.emit('jump');