let greet = require('./patrones/greet1');
// let greet2 = require('./patrones/greet2').greet;
let greet2a = require('./patrones/greet2');
greet();
//greet2();
greet2a.greet();

const greet3 = require('./patrones/greet3');
console.log(greet3);
greet3.greet();
greet3.greeting = "Hello from the App"

let greet3b = require('./patrones/greet3');
greet3b.greet();

const Greet4 = require('./patrones/greet4');
let myGreet = new (Greet4);
myGreet.greet();

const greet5 = require('./patrones/greet5');
greet5.greet();
