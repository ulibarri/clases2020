// const Emitter = require('./emitter');

const Emitter = require('events');

// Node ya tiene el código que implementamos en el archivo emitter.js 

const config = require('./config')

let emtr = new Emitter();

emtr.on(config.events.GREET, () => {
    console.log('Alguien, alguien esta diciendo hola.');
});

emtr.on(config.events.GREET, () => {
    console.log('Un saludo ocurrio!');
});

emtr.on(config.events.JUMP, () => {
    console.log('Alguien salto');
});

// console.log(emtr);
emtr.emit('greet');
emtr.emit('jump');
