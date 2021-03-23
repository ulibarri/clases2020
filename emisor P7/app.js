//var Emitter = require('./emitter'); //inyeccion
var Emitter = require('events');
var config = require('./config')

let emtr = new Emitter(); // genero la instancia

emtr.on(config.events.GREET, () =>{
    console.log('Somewhere, someone said hello.');
})

emtr.on(config.events.GREET, () =>{
    console.log('A greeting occurred!');
})

console.log(emtr);
emtr.emit('greet');

/*Imprime los eventos de la función emitter*/

emtr.on('jump', () => {
    console.log('someone jumped!')
});

console.log(emtr)
emtr.emit('jump')

/* Se cambia la forma del emitter a la propia de node js */