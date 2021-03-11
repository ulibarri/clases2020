// Módulo que expone una sola función/método
let greet = require('./greet1')

// Módulo regresa una propiedad en específico
let greet2 = require('./greet2').greet;
let greet2a = require('./greet2')
greet();
greet2();
greet2a.greet();

const greet3 = require('./greet3'); //Objeto construido/ instanciado
console.log(greet3);
greet3.greet();

greet3.greeting = ("Hello from the app");

let greet3b = require('./greet3');
greet3b.greet();



// Módulo que expone un constructor
const greet4 = require('./greet4');
let myGreet = new (greet4);
myGreet.greet();


const greet5 = require('./greet5');
greet5.greet();