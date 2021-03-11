let greet = require('./greet1');
//let greet2 = require('./greet2').greet
let greet2a = require('./greet2')
greet()
//greet2()
greet2a.greet()

//greet3

let greet3 = require('./greet3')
//console.log(greet3)
greet3.greet()
greet3.greeting = 'hello from the app'

let greet3b = require('./greet3')
greet3b.greet()

let greet4 = require('./greet4')
let myGreet = new(greet4)
myGreet.greet()
