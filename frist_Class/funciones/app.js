/*
//--------------------PRACTICA #2--------------------//
//FUNCTIONS//
function greet(){
    console.log('Hello');
}
greet(); //invocar


//functions as parameters
function logGreeting(fn){
    fn();
}
logGreeting(greet);
//Pasmaos la función geet como parametro e 
//invocandola con el nombre del argumento fn


//function expression
let greetMe = function(){
    console.log('Hello from the function expression');
}
greetMe();

logGreeting(greetMe);


//ARROW FUNCTIONS//
let miFuncion = () =>{
    console.log('Hola desde la Arrow function');
}
miFuncion();

//Parámetros de las funciones flecha
let saludo = (nombre, apellido) =>{
    console.log('Hola ' + nombre + ' ' + apellido);
}
saludo('Jonathan', 'Rodriguez');

//Ausencia de las llaves de la función
let saludo2 = (nombre, apellido) => console.log('Hola ' + nombre + ' ' + apellido + ' desde la funcion sin llaves');
saludo2('Jonathan', 'Rodriguez');


//Funcion flecha con un unico parametro
let cuadrado = numero =>{
    return numero * numero;
}
console.log(cuadrado(5));

//Ausencia de la palabra return
let cuadrado2 = numero => numero * numero
console.log(cuadrado(5));


//REFACTOR//
//función greet()
let greet2 = () => console.log('Hello desde el greet con refactor');
greet2(); //invocar

//función logGretting()
let logGreeting2 = fn => fn();
logGreeting2(greet2);

//función greetMe()
let greetMe2 = () => console.log('Hello from the function expression with refactor');
greetMe2();
*/


//--------------------PRACTICA #3--------------------//

//Funcion de la practica pasada
function greet(){
    console.log('Hello');
}
let logGreeting = (fn) => fn()
logGreeting(greet);

//Function expression created on the fly
let logGreeting3 = (fn) => fn();
logGreeting3(function(){
    console.log('Hello from a function created on the fly')
})


//Interpolacion de strings "Clasica"
let saludo = (nombre, apellido) => console.log('Hola ' + nombre + ' ' + apellido + ' desde la Interpolacion de strings');
saludo('Jonathan', 'Rodriguez');

//Template String
let saludo2 = (nombre, apellido) => console.log(`Hola ${nombre} ${apellido} desde Template string`);
saludo2('Jonathan', 'Rodriguez');