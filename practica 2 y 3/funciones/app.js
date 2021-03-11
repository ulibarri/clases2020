function greet(){
    console.log('Hello');
}
greet(); //Invocar

function logGreeting(fn){
    fn() 
}

logGreeting(greet);
//estamos pasando la función greet como
//parámetro e invocandola con el nombre del argumento fn


let greetMe = function(){
    console.log('Hello from the function expression c:');
}

greetMe(); //Invocar

logGreeting(greetMe);//functions are first class



//arrow function
//function expresion 
let myFunction = () =>{
}

myFunction();

let saludo = (nombre, tratamiento) => {
    console.log('Hola ' + tratamiento + ' ' + nombre)
}

saludo('Vanessa', 'sra.');


let saludo2 = (nombre, tratamiento) => console.log('Hola ' + tratamiento + ' ' + nombre)
saludo2('Alondra', 'sra.');


let cuadrado = numero => {
    return numero * numero;
}
console.log(cuadrado(2))


let cuadrado2 = numero => numero * numero;
console.log(cuadrado2(2))


 var cuadrado3 = function(numero){
     return numero * numero
 }
 console.log(cuadrado3(2))





//ACTIVIDAD
//Realiza un refactor para la función greet(), de acuerdo a las especificación de ES6 para las funciones flecha

let greet1=(nombre) => console.log("Bienvenida " + nombre + " a la actividad");
greet1('Vanessa');


//Realiza un refactor para la función logGretting(), de acuerdo a las especificación de ES6 para las funciones flecha

let logGreeting1 = (fn) => fn() 


logGreeting1(greet1('Vanessa'));


//Realiza un refactor para la función greetMe(), de acuerdo a las especificación de ES6 para las funciones flecha

let greetMe1 = () => console.log('Hola greetme');
greetMe1();
logGreeting1(greetMe1);