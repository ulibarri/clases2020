//Funciones
console.log('------------Funciones------------');
function greet() {
    console.log('Hello');
}
greet();
function logGreeting(fn) {
    fn();
}
logGreeting(greet);
let greetMe = function () {
    console.log('Hello from the function expresion');
}
greetMe();
logGreeting(greetMe);
//Funciones ES6
console.log('----------Funciones ES6----------');
let greetArrowFunction = () => {
    console.log('Hello');
}
greetArrowFunction();
let logGreetingArrowFunction = (fn) => {
    fn();
}
logGreetingArrowFunction(greetArrowFunction);
let greetMeArrowFunction = () => {
    console.log('Hello from the function expresion');
}
greetMeArrowFunction();
logGreetingArrowFunction(greetMe);
let miFunction = (something) => {
    console.log(`Tu has dicho ${something}`);
}
//Ejemplos de funciones con flechas
console.log('-------Funciones con flecha------');
miFunction('Hola');
var saludo = (nombre, tratamiento) => {
    console.log(`Hola ${tratamiento} ${nombre}.`);
}
saludo('Iván', `Sr.`)
var cuadrado = numero => {
    return numero * numero;
}
saludo = (nombre, tratamiento) => console.log(`Hola ${tratamiento} ${nombre}.`);
saludo(`Luis`, `Sr.`);
cuadrado = numero => numero * numero; //esto es lo mismo a...
console.log(cuadrado(1));
cuadrado = function(numero) { // esto otro
    return numero * numero;
}
console.log(cuadrado(1));
//Tipos de funciones
function cuadrado1(numero) {
    return numero * numero;
}
console.log(cuadrado1(9));
let cuadrado2 = numero => {
    return numero * numero
}
console.log(cuadrado2(8));
let cuadrado3 = numero => numero * numero;
console.log(cuadrado3(7));