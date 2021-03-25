//const Emitter = require('./emitter'); //inyecto la dependencia
var Emitter = require('events'); //hace un conteo de los ebentos que ocurren y cuál es el evento

const config = require("./config"); //inyecto la instancia (Hace lo mismo, un conteo de los ebentos que ocurren y cuál es el evento, pero obteniendolo desde el config)

let emtr = new Emitter(); //genero la instancia

/*emtr.on('greet', () => {
    console.log('Somewhere, someone said hello');
});*/

emtr.on(config.events.GREET, () => {
    console.log('Somewhere, someone said hello');
});

/*emtr.on('greet', () => {
    console.log('A greeting ocurred');
});*/

emtr.on(config.events.GREET, () => {
    console.log('A greeting ocurred');
});

console.log(emtr);
emtr.emit('greet');

//Obtiene el Emisor de emitter.js y lo ejecuta

/*emtr.on('jump', () => {
    console.log('Someone jumped');
});*/

emtr.on(config.events.JUMP, () => {
    console.log('Someone jumped');
});

console.log(emtr);
emtr.emit('jump');

//agrega jump a los eventos del emisor y lo detecta