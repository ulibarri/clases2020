//const Emitter = require('./emitter'); //inyecto la dependencia
var Emitter = require('events');
const config = require('./config');

let emtr = new Emitter(); //genero la instancia

emtr.on(config.events.GREET, () => {
    console.log('Somewhere, someone said hello.');
});

emtr.on(config.events.GREET, () => {
    console.log('A greeting ocurred!');
});

console.log(emtr);
emtr.emit('greet'); 
/*se imprimen las funciones greet que se insertaron
en el emisor de eventos y se muestra la estructura*/

emtr.on(config.events.JUMP, () => {
    console.log('someone jumped!');
});

console.log(emtr);
emtr.emit('jump');
/*se imprime el contenido (con 2 arrays: greet y jump) del
emisor de eventos y se muestra la estructura de forma diferente*/ 