let greet = require('./greet1');
greet();
// let greet2 = require('./greet2').greet
let greet2a = require('./greet2');
//greet2();
greet2a.greet();



const greet3 = require('./greet3'); //Objeto construido/instanciado
console.log(greet3);
greet3.greet();

greet3.greeting = "Hello from the App"

let greet3b = require('./greet3');
greet3b.greet();

const Greet4 = require('./greet4'); //constructor
let myGreet = new (Greet4);
myGreet.greet();

const greet5 = require('./greet5'); //Revealig module pattern
greet5.greet()