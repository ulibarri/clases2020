const Emitter = require('./emitter');
let emtr = new Emitter();
emtr.on('greet', () => {
    console.log('somewhere, someone said hello.');
});

emtr.on('greet', () => {
    console.log('a greeting ocurred!');
});

console.log(emtr);//aparece los mensajes se borra y sale otro
emtr.emit('greet');

emtr.on('jump', () => {
    console.log('someon jumped!');

});
console.log(emtr)
emtr.emit('jump'); // hace saldo de los dos avisos anteriores y muestra el actual.

//var emitter = require('./emitter');
var Emitter = require('events');