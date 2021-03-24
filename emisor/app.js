var Emitter = require('events');  //inyecto la dependencia
var config = require('./config')

let emtr = new Emitter(); //genero la instancia

//Se hace referencia al modulo de config para obtener los eventos greet y jump
emtr.on(config.events.GREET, () => {
    console.log('Somewhere, someone said hello');
});

emtr.on(config.events.GREET, () => {
    console.log('A greeting occurred');
});

console.log(emtr); //se muestra el contenido del emisor
emtr.emit('greet')

emtr.on(config.events.JUMP, () => {
    console.log(("someone jumped!"));
});

console.log(emtr);
emtr.emit('jump');