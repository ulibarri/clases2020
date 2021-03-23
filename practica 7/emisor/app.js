// var Emitter = require('./emitter');
var Emitter = require('events');
const config = require('./config');

let emtr = new Emitter(); // genero la instancia

emtr.on(config.events.GREET, () => {
    console.log('Somewhere, someone said hello.');
});

emtr.on(config.events.GREET, () => {
    console.log('A greeting occurred!');
});

console.log(emtr);
emtr.emit('greet');
// Se imprime el objeto Emitter señalando un evento con el nombre greet seguido de dos funciones 
// señaladas como anónimas, y debajo se imprimen los dos mensajes que se insertaron en las 
//funciones greet anteriores.
emtr.on(config.events.JUMP, () => {
    console.log('someone jumped!');
})

console.log(emtr)
emtr.emit('jump');
// En esta ocasión se imprimió el objeto Emitter señalando el evento greet que ya teníamos
// anteriormente, más el evento jump, con una función anónima, y debajo se imprimió el mensaje
// 'someone jumped!' que se insertó en la función jump.

// Se imprimió lo siguiente: 
// EventEmitter {
//_events: [Object: null prototype] {
//greet: [ [Function (anonymous)], [Function (anonymous)] ],
//jump: [Function (anonymous)]
//},
//_eventsCount: 2,
//_maxListeners: undefined,
//[Symbol(kCapture)]: false
//}
//someone jumped!

// Con la implementación de la clase Config, se obtuvo el mismo resultado que se había obtenido
// con el último node app realizado en consola.