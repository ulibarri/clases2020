let greet = require ("./greet1");
// let greet2 = require ("./greet2").greet;
let greet2a = require ("./greet2");
greet();
//greet2();
greet2a.greet();
//greet 3

const greet3 = require("./greet3"); //objeto construido/instanciado
console.log(greet3);
greet3.greet();

//greet4

const Greet4 = require("./greet4"); //constructor
let myGreet = new(Greet4);
myGreet.greet();

//greet5

const greet5 = require("./greet5");
greet5.greet()