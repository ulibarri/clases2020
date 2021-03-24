//const Emitter = require('./emmiter'); //inyecto la dependencia
var Emitter = require('events'); //Al cambiar de nuestro emitter a los eventos de js, podemos ver que imprime con mejor estructura y cuenta los eventos
const config = require('./config');
let emtr = new Emitter(); //genero la instancia

/*
emtr.on('greet', () => {
    console.log('Somewhere, someone said hello');
})

emtr.on('greet', () => {
    console.log('A greeting ocurred!');
})

console.log(emtr); //Muestra el contenido del emtr, donde se alojaron las funciones anteriores
emtr.emit('GREET');//Se invocan las funciones del evento greet que se almacenan en el forEach de emmiter y se imprimen

emtr.on('jump', () => {
    console.log('someone jumped!');
})
//Se crea el nuevo evento llamado jump
console.log(emtr); //invoca el contenido completo del emtr, el cual ahora tiene dos eventos uno con dos funciones y otro con una
emtr.emit('JUMP'); //invoca lo del evento jump
*/

emtr.on(config.events.GREET, () => {
    console.log('Somewhere, someone said hello');
})

emtr.on(config.events.GREET, () => {
    console.log('A greeting ocurred!');
})

console.log(emtr); 
emtr.emit('GREET');
emtr.on(config.events.JUMP, () => {
    console.log('someone jumped!');
})

console.log(emtr);
emtr.emit('JUMP'); 
//al agregar la dependecia del config.js, no se define el nombre del evento a impirmir ya que config se encarga de cualquier error

