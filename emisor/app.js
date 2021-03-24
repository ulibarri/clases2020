//const Emitter = require('./emitter'); 
var Emitter = require('events')

var config = require('./config')
let emtr = new Emitter();

//Ahora, modificamos el código haciendo referencia a módulo config para tomar los eventos greet y jump respectivamente
emtr.on(config.events.GREET, () => {
    console.log('Somewhere, someone said hello.');
});

emtr.on(config.events.GREET, () => {
    console.log('A greeting ocurred!');
});

console.log(emtr); //se muestra el contenido del emisor de eventos, es decir las funciones 'greet' que fueron insertadas en él 
emtr.emit('greet');


emtr.on (config.events.JUMP, () => {
    console.log('someone jumped!');
});

console.log(emtr) //se muestra el contenido del emisor de eventos, en este caso, las funciones 'jump' que fueron insertadas en él 
emtr.emit('jump');