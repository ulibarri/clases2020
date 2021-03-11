function greet(){
    console.log('Hello');
}
greet(); //invoke

function logGreeting(fn){
    fn();
}
logGreeting(greet);
//estamos pasando la funcion greet como
//parámetro e invocandola con el nombre del argumento fn

//function expression 
let greetMe = function(){
    console.log('Hello from the function expression');
}
greetMe();

logGreeting(greetMe);
// functions are the first class, pass it as parameter

//Arrow functions

//Realiza un refactor para la función greet(), de acuerdo a las especificación de ES6 para las funciones flecha
let greet1 = () => console.log('Hello');
greet1();

//Realiza un refactor para la función logGretting(), de acuerdo a las especificación de ES6 para las funciones flecha
let logGreeting1 = (fn) => fn();
logGreeting(greet1);

//Realiza un refactor para la función greetMe(), de acuerdo a las especificación de ES6 para las funciones flecha
let greetMe1 = () => console.log('Hello from the function expression');
greetMe1();
logGreeting1(greetMe1);