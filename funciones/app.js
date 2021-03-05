/*
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
*/
/*
//función
let greet = () =>{
    console.log("Hello");
};
//invocación
greet();

//función
let logGreeting = (fn) =>{
    fn();
};
//invocación
logGreeting(greet);

//función
let greetMe = () =>{
    console.log("Hello from the function expression");
};
//invocación
greetMe();
*/

let logGreeting = (miParametro) => miParametro();
logGreeting(function (){
    console.log("Hello from a function created on the fly")
});

//interpolación clásica
let logGreeting1 = (miNombre, miColor) => {
    console.log("Hola " + miNombre + " tu color favorito es el " + miColor);
};

logGreeting1("Carlos", "Azul");

//string interpolation
let logGreeting2 = (miNombre, miColor) =>{
    console.log(`Hola ${miNombre} tu color favorito es ${miColor} (utilizando interpolación)`)
};

logGreeting2("Carlos", "Azul");