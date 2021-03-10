let greet = require('./greet1');
//let greet2 = require('./greet2').greet;
let greet2a = require('./greet2');

greet();
//greet2();
greet2a.greet();

//Greet3
const greet3 = require('./greet3');
//console.log(greet3);

greet3.greet();
greet3.greeting = "Buenas desde la App";

let greet3b = require('./greet3');
greet3b.greet();

//Greet4
const Greet4 = require('./greet4');
let myGreet = new (Greet4);
myGreet.greet();

//Greet5
const greet5 = require('./greet5');
greet5.greet();