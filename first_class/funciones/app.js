function greet () {
    console.log('Buenas');
}
greet();

//Functions as parameters
function logGreeting(fn) {
    fn();
};
logGreeting(greet);

//Function expression
let greetMe = function () {
    console.log('Buenas desde la función de expresión');
}
greetMe();

//loggreet
logGreeting(greetMe);

//Arrow functions
let greetArrow = () => {
    console.log('Buenas arrow');
}
greetArrow();

let logGreetingArrow = (fn) => {
    fn();
}
logGreetingArrow(greetArrow);

let greetMeArrow = () => {
    console.log('Buenas desde la función arrow');
}
greetMeArrow();

logGreetingArrow(greetMeArrow);

//Arrow parameter functions

let saludo = (nombre, tratamiento) => {
    console.log('Buenas' + ' ' + tratamiento + '' + nombre );
}
saludo('Luis', 'sr.');

let cuadrado = numero => {
    return numero * numero;
}
console.log(cuadrado(5));

//without brackets

let saludo2 = (nombre, tratamiento) => console.log ('Buenas' + ' ' + tratamiento + '' + nombre);
saludo2('Jorge', 'sr.');

let cuadrado2 = numero => numero * numero;
console.log(cuadrado2(10))

function cuadrado3(numero) {
    return numero * numero;
}
console.log(cuadrado3(4));

let cuadrado4 = numero => {
    return numero * numero
}
console.log(cuadrado4(2));

let cuadrado5 = numero => numero * numero;
console.log(cuadrado5(7));
