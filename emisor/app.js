// const Emitter = require('./emitter');
const Emitter = require('events');
//Explicacion: El codigo fuciona de igual manera, ya que nodejs en sus eventos tiene una clase llamada Emitter y con metodos y parametros iguales. Solo que estamos usando los eventos de node.

const config = require('./config');

let emtr = new Emitter();

emtr.on(config.events.GREET, () => {
    console.log('Somewhere, someone said hello')
});

emtr.on(config.events.GREET, () => {
    console.log('A greeting ocurred')
});

console.log(emtr);
emtr.emit('greet');
//Explicacion: La funcion 'on' recibe el 2 parametros, un tipo y un comportamiento. En este caso estamos poniendole de tipo/nombre 'greet' y el comportamiento es una funcion. Al ejecutar la funcion emit, esta busca en el constructor alguna propiedad con el nombre/tipo 'greet' y al encontrarla accede al valor de esta y recorre todos los elementos del array con un forEach.


emtr.on(config.events.JUMP, () => {
    console.log('Someone jumped')
});
//Explicacion: En la funcion emit se busca que haya alguna propiedad con un nombre llamado "jump", si es que existe con un forEach recorres todos los elementos que tenga el array de dicha propiedad y ejecuta cada elemento del array como una funcion. Emmit tiene la forma de evento jump.



//Explicacion de como es que funciona el codigo usando las variables de config.js: El nombre del evento ya no lo estamos ingresando manualmente, sino que estamos haciendo uso de un modulo externo (config.js) en el cual estan los diferentes eventos. El codigo funciona de igual manera a escribir el nombre de la funcion manualmente.

