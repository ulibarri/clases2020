/*
function greet() {
    console.log('Hello');
}
greet(); //invoke 

//functions as parameters
function logGreeting(fn) {
    fn();
};*/


function greet() {
    console.log('Hello'); 
}

greet()

let logGreeting = (miParametro) => miParametro();
logGreeting(function () {
    console.log('Hello from a function created on the fly')
})

logGreeting(greet);
//estamos pasando la función greet
//parámatre e incovando con el nombre del argumento fn

//function expression
let greetMe = function () {
    console.log('Hello from the function expression')
}

greetMe();

logGreeting(greetMe)
//functions are first class, pass it as a parameter

/*
let greet = () => console.log('Hello')
greet()

let logGreeting = fn => fn()
logGreeting(greet)

let greetMe = () => console.log('Hello from the function expression')
greetMe()

*/

//Interpolación de strings "Clásica"
let logGreeting1 = (miNombre, miColor) =>{
    console.log(`Hola ${miNombre} buenos días! Tu color favorito es el ${miColor}`)
}
logGreeting1("Alfredo", "azul celeste")