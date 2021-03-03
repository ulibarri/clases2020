/*
function greet() {
    console.log('Hello');
}
greet(); //invoke 

//functions as parameters
function logGreeting(fn) {
    fn();
};

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
*/

let greet = () => console.log('Hello')
greet()

let logGreeting = fn => fn()
logGreeting(greet)

let greetMe = () => console.log('Hello from the function expression')
greetMe()