//let greet = require('./greet1')
//greet()
//let greet2 = require('./greet2').greet
let greet2 = require('./greet2')
greet2()

const greet3 = require('./greet3')
console.log(greet3)
greet3.greet()
greet3.greeting = 'hello from the app'
let greet3b = require('./greet3')
greet3b.greet()