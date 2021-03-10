let greet = require ("./greet1.js");
//let greet2 = require("./greet2.js").greet;
let greet2a = require ("./greet2.js");
const { greeting } = require ("./greet3.js");
let greet3 = require("./greet3");
greet();
//greet2()
greet2a.greet();

greet3.greet();

greet3.greeting = "Hello from the App";

let greet3b = require("./greet3.js");
greet3b.greet();

const Greet4 = require("./greet4");
let myGreet = new (Greet4);
myGreet.greet();

const greet5 = require ("./greet5.js");
greet5.greet(); 