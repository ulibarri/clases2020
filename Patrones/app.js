let greet = require('./greet1.js');
greet();

let greet2 = require('./greet2.js').greet;
greet2();


const greet3 = require('./greet3.js');
console.log(greet3);

greet3.greeting = 'hello from app'

let greet3b =require ('./greet3.js');
greet3b.greet();

greet3.greet();


const greet4 = require('./greet4.js');
let myGreet = new (greet4);

myGreet.greet();


const greet5 = require('./greet5.js');
greet5.greet();







