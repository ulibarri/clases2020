function greet() {
    console.log("Hello");
}

greet(); //invoke 

//functions as parameters
function logGreeting(fn) {
    fn();
};
logGreeting(greet);
//Pasamos la función greet como parametro
//e invocandolo con el nombre del argumento fn

//function expression
let greetMe = function () {
    console.log("Hello from the function expression");
}
greetMe();

logGreeting(greetMe);
//functions are first class, pass it as a parameter