//const Emitter = require('./emitter');
var Emitter = require('events');
var config = require('./config');

let emtr = new Emitter();

emtr.on(config.events.GREET, () => {
    console.log("Somewhere, someone said hello.");
});

emtr.on(config.events.GREET, () => {
    console.log('A greeting ocurred!');
});

console.log(emtr);
emtr.emit('greet');
//Imprime la estructura de los eventos que hay dentro de emitter, son 2 con el mismo nombre, después ejecuta
// los eventos con el nombre de "greet"

emtr.on(config.events.JUMP, () =>{
    console.log('someone jumped!');
});

console.log(emtr);
emtr.emit('jump');
//Imprime la estructura de los eventos que hay dentro de emitter, son 2 con distintos nombres, después ejecuta
//el evento con el nombre de "jump"

//var Emitter = require('events');
//imprime la estructura del emitter, primero cuando se imprime haciendo la llamada a los eventos "greet" y después 
//a cuando se agrega el evento "jump"

//se imprime lo mismo con un método semejante