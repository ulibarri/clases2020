function greet(){
    console.log('Holap');
}
greet(); //Invocarla (1ra llamada)

function logGreeting(fn){
    fn() //invocar a la funcion (2da llamada)
}

logGreeting(greet);

//function expresion
//Funcion anonima
let greetMe = function(){
    console.log('Saludos desde la function expresion ;)');
}

greetMe(); //Invocar a la funcion (1ra llamada)
logGreeting(greetMe);//Segunda llamada


//arrow function
//function expresion 
let myFunction = () =>{
    console.log('Saludos desde la Arrow function :P');
}

myFunction();

let saludos = (nombre, tratamiento) => {
    console.log('Hola ' + tratamiento + ' ' + nombre)
}
//invocamos
saludos('Ximena', 'sra.');

//Saludo con ausencia de llaves
let saludos2 = (nombre, tratamiento) => console.log('Hola ' + tratamiento + ' ' + nombre)
saludos2('Ximeno', 'sr.');


let cuadrado = numero => {
    return numero * numero;
}
console.log(cuadrado(2))

//Ausencia de Return 
let cuadrado2 = numero => numero * numero;
console.log(cuadrado2(2))

//Codigo mas compacto 
 var cuadrado3 = function(numero){
     return numero * numero
 }
 console.log(cuadrado3(2))


//    PARACTICA DE CLASE 
//Arrow function con parametros 
//function expression

let saludo = (name) =>{
    console.log("Saludos " + name + " desde la Arrow function");
}

saludo('Ximena'); 

//REFACTOR A UNA SOLA LINEA, OBVIENDO LAS LLAVES

let saludo2 = (name) => console.log("Saludos " + name + " desde la Arrow function sin llaves");
saludo2('Ximena'); 

let pow = numero =>{
    return numero * numero
}
console.log(pow(4));

let pow2 = numero => numero * numero;
console.log(pow2(4));


// ------------- ACTIVIDAD -------------

//Realiza un refactor para la función greet(), de acuerdo a las especificación de ES6 para las funciones flecha

let greet1=(nombre) => console.log("Bienevnid@ " + nombre + " a la actividad");
greet1('Ximena');

//Realiza un refactor para la función logGretting(), de acuerdo a las especificación de ES6 para las funciones flecha

let logGreeting1 = (fn) => fn() 


logGreeting1(greet1('Ximena'));

//Realiza un refactor para la función greetMe(), de acuerdo a las especificación de ES6 para las funciones flecha

let greetMe1 = () => console.log('Saludos desde greetMe');
greetMe1();
logGreeting1(greetMe1);



