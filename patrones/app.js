let greet = require('./greet1')
//let greet2 = require('./greet2').greet
let greet2a = require('./greet2')
greet()
//greet2()
greet2a.greet()

let greet3 = require('./greet3')
greet3.greet()
greet3.greeting = 'Hello from the App' //Se la propiedad que guardaba el 'Hello from the function constructor' desde el archivo app.js
let greet3b = require('./greet3') 
greet3b.greet() //se imprime el mensaje cambiando a 'Hello from the App'

const Greet4 = require('./greet4')
let myGreet = new(Greet4)
myGreet.greet()

const greet5 = require('./greet5')
greet5.greet()