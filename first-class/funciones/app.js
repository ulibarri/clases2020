function greet() {
    console.log('Hola')
}

greet() 

//funtion as parameters

function logGreeting(fn) {
    fn()
}

logGreeting(greet)

//function expression

let greetMe = function () {
    console.log('Hola desde la Function Expression')
}

greetMe()

logGreeting(greetMe)

//Arrow Functions

let  greetAF = () => {
    console.log('Hola Arrow Functions')
}

greetAF()

//Arrow Functions con parámetros

let logGreetingAF = (fn) => {
    fn()
}

logGreetingAF(greetAF)

//Arrow Functions con un único parámetro
let greetMeAF = () => {
    console.log('Hola desde GreetMeAF')
}

greetMeAF()

//Arrow Functions con parámetros sin corchetes
let greetAF2 = (fn) => fn()

greetAF2(greetMeAF)

//Arrow Functions con un único parámetro sin corchetes

let greetAF3 = fn => fn()

greetAF3(greetMeAF)