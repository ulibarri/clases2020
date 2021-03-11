//modulo que expone una sola funcion

let greet = require('./greet1')

//modulo que regresa una propiedad en especifico

//let greet2 = require('./greet2').greet
let greet2a = require('./greet2')
greet()
//greet2()
greet2a.greet()

//modulo que expone un objeto construido/instanciado

const greet3 = require('./greet3') //objeto construido/instanciado
console.log(greet3)
greet3.greet()
greet3.greeting = "Hello from the app"
let greet3b = require('./greet3')
greet3b.greet()

//modulo que expone un constructor

const Greet4 = require('./greet4') //constructor
let myGreet = new (Greet4)
myGreet.greet()

//Revealing module pattern

const greet5 = require('./greet5')
greet5.greet()