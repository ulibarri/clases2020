// Referenciando la dependencia emitter.js
// const Emitter = require('./emitter');
const Emitter = require('events');
const config = require('./config');

// Asignando un objeto de tipo "Emitter".
let emtr = new Emitter();

// Insertando una función.
// emtr.on('greet', () => {
//     console.log('Somewhere, someone said hello');
// });
emtr.on(config.events.GREET, () => {
    console.log('Somewhere, someone said hello');
})

// Insertando una función con el mismo nombre pero con otro comportamiento.
// emtr.on('greet', () => {
//     console.log('A greeting ocurred!');
// });
emtr.on(config.events.GREET, () => {
    console.log('A greeting ocurred!');
});

// Invocando a la función "greet"
console.log(emtr);
emtr.emit('greet');

/* El console.log nos regresará todas las propiedades / contenido de emiter, el cual contiene los parámetros de distinto tipo y comportamiento.
Para este caso se ha utilizado el de tipo "greet" el cual se comporta como una función, una vez ejecutada, se buscara una propiedad de tipo
"greet" y una vez que haya sido encontrada se accede al valor y se lee cada valor de este con el ciclo forEach. */

// emtr.on('jump', () => {
//     console.log('someone jumped');
// });
emtr.on(config.events.JUMP, () => {
    console.log('someone jumped');
});

/* Primero se añade la nueva función al Emitter, luego se realiza un recorrido hasta encontrar, de entre todos los elementos, uno que
coincida con esa propiedad y finalmente lo ejecuta. */

console.log(emtr);
emtr.emit('jump');

/* Finalmente una vez modificado la clase de Emitter y añadiendo el archivo de config.js, podemos observar como la dependencia es mucho mas diferente a lo que teníamos hecho por nuestra cuenta , una de las diferencias es que ahora cuenta la cantidad de eventos procesados y también los que hemos ido insertando. */