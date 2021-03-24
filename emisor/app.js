//const Emitter = require('./emitter');
var Emitter = require('events');
var config = require('./config')

let emtr = new Emitter();

emtr.on(config.events.GREET, () => {
    console.log('En algun lugar, alguien dijo hola.');
});

emtr.on(config.events.GREET, () => {
    console.log('Ha ocurrido un saludo!');
});

console.log(emtr);
emtr.emit('greet');

emtr.on(config.events.JUMP, () => {
    console.log('Alguien ha saltado!');
});

console.log(emtr);
emtr.emit('jump');

