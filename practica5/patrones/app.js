//GREET1//
let greet1 = require('./greet1');
greet1();

//GREET2//
let greet2 = require('./greet2').greet1; //la forma mas utilizada
greet2();
//let greet2a = require('./greet2');
//greet2a.greet1();

//GREET3//
const {greeting} = require('./greet3'); //objeto construido/instanciado
let greet3 = require('./greet3');
greet3.greet1();
greet3.greeting = "Hello from the app";
let greet3a = require('./greet3');
greet3a.greet1();

//GREET4//
const greet4 = require('./greet4');
let mygreet = new (greet4);
mygreet.greet1();

//GREET5//
const greet5 = require('./greet5');
greet5.greet1();