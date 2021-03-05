
function greet(){
    console.log('Hello');
}

greet(); //invoke

// function as parameters
function logGreeting(fn) {
    fn();
}
logGreeting(greet);

//function expression 
let greetMe = function () {
    console.log('Hello from the function expression');
}

greetMe();
logGreeting(greetMe);
// functions are the first class, pass it as parameter


//arrow function
let saludo = (name) => {
    console.log("Saludos " + name + " desde la Arrow function");
}

let logGreeting1 = (miNombre, miColor) => {
    console.log(`Hola ${miNombre} buenos dias! Tu color favorito es el ${miColor}`);
}
logGreeting1("Edson","Amarillo")