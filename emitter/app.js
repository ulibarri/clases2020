/**
 * El codigo fuciona de igual manera, 
 * ya que NodeJS en sus eventos tiene una clase llamada Emitter sin embargo cuenta con mas elementos, con metodos y parametros similares. 
 * La diferencia es que estamos utilizando las librerias de NodeJS.
 */

//const Emitter = require('./emitter'); 
var Emitter = require('events');

const config = require('./config');

let emtr = new Emitter();

emtr.on(config.events.GREET, () => {
    console.log('Somewhere, someone said hello!');
});

emtr.on(config.events.GREET, () => {
    console.log('A greeting ocurred!');
});

console.log(emtr);
emtr.emit('greet');

/**
 * Regresa  el contenido de Emitter ya que la funcion on recibe dos parametros distintos de tipo y comportamiento.
 * En este caso estamos buscando de tipo/nombre 'greet' y el comportamiento es una funcion. Al ejecutar la funcion emit, 
 * buscamos en el constructor alguna propiedad con el nombre/tipo 'greet' y 
 * al encontrarla accede al valor de esta y recorre todos los elementos del array de dicha propriedad con un forEach.
 */

emtr.on(config.events.JUMP, () => {
    console.log('someone jumped!');
});

/**
 * La funcion emit busca que existe una propiedad de nombre 'jump', 
 * en el caso de encontrarse recorre todos los elementos del array de esa propiedad ademas de ejecutar cada elemento como una funcion.
 */

console.log(emtr)
emtr.emit('jump');

/**
 * Como funciona el codigo ahora, Ahora de esta forma ya no ingresamos el nombre delm evento de manera manual,
 * ahora mediante un modulo externo que contiene ambos eventos. Y lo que despliega es basicamente el mismo funcionamiento del programa.
 * Solo que ahora implementado y separado por modulos. Haciendo asi un codigo mas modular y mas eficiente a la hora de modificar o reparar 
 */