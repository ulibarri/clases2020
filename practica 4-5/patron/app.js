let greet = require('./greet1');
// let greet2 = require('./greet2');
let greet2a = require('./greet2').greet;
const greet3 = require('./greet3')

greet();
// greet2();
// greet2a.greet();
greet2a();

console.log(greet3);
greet3.greet();
greet3.greeting = 'hello from App';
let greet3b = require('./greet3');
greet3b.greet();

const Greet4 = require('./greet4');
let myGreet = new (Greet4);
myGreet.greet();

const greet5 = require('./greet5');