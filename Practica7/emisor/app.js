/* var Emitter = require('./emitter'); //Inyecto la dependencia */

var Emitter = require('events');
const config = require('./config');

let emtr = new Emitter(); //Genero la instancia 

emtr.on(config.events.GREET, () =>{
    console.log('Somewhere, someone said hello.');
});

// Se muetsra la estructura de todo 

emtr.on('greet', () =>{
    console.log('A greeting occurred');
});

console.log(emtr);
emtr.emit('greet');

//Muestra la estructura y los mensajes 

emtr.on('jump',()=>{
    console.log('someone jumped!');
});

console.log(emtr)
console.log('jump');

//Se imprime Jump y Emitter ahora tiene events, greet y jump

//Se muestra la estructura de forma diferente 



