//var Emmiter = requiere('./emitter');
var Emitter = require('events');  //inyecto la dependencia

var config = require('./config');

let emtr = new Emitter(); //genero la instancia


emtr.on(config.events.GREET, () => {
    console.log('Somewhere, someone said hello');
});
emtr.on(config.events.GREET, () => {
    console.log('A greeting occurred');
});
//Hacemos referencia a config.js para sacar los eventos de greet y jump

console.log(emtr); //se muestra las funciones que acabamos de insertale al emisor (las de greet)
emtr.emit('greet');

emtr.on(config.events.JUMP, () => {
    console.log(('someone jumped!'));
});

console.log(emtr); //se muestra las funciones que acabamos de insertale al emisor (las de jump)
emtr.emit('jump');