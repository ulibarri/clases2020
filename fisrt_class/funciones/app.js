// function greet() {
//     console.log('Hello');
// };

// greet(); 

// function logGreeting(fn) {
//     fn();
// };
// logGreeting(greet);

// let greetMe = function() {
//     console.log('Hello from the function expression')
// } 

// greetMe();
// logGreeting(greetMe);

//Practica 3
let logGreeting1 = (miNombre, miColor) => {
    console.log("Hola " + miNombre + " buenos días! Tu color favorito es el " + miColor);
}

logGreeting1("Gabino", "Rojo")


// ES6 
// let greetES6 = () => console.log('Hello');
// let logGreetingES6 = (fn) => fn();
// let greetMeES6 = () => console.log('Hello from the function expression');

// greetES6();
// logGreetingES6(greetES6);
// greetMeES6();