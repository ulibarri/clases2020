const greet1 = require('./greet1');
const { greet: greet2 } = require('./greet2');
const greet3 = require('./greet3');
const Greetr = require('./greet4');
const { greet: greet5 } = require('./greet5');
greet1();
greet2();
// console.log(greet3);
greet3.greet();
greet3.greeting = 'Hello from the app';

const greet3a = require('./greet3');
greet3a.greet();

const appGreet = new Greetr();
appGreet.greet();

greet5();
