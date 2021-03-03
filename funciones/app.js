function greet(){
    console.log("Hello")
};
greet(); //invoke

//function as parameters
function logGreeting(fn){
    fn();
};
logGreeting(greet);
//estamos pasando la función greet como
//parámetro e invocandola con el nombre del argumento fn

//function expression
let greetMe = function(){
    console.log("Hello from the function expression");
};
greetMe();

logGreeting(greetMe);
//functions are first class, pass it a parameter