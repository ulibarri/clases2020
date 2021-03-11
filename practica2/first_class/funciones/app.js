/*
function greet(){
    console.log("Hello");
}
greet(); //invoke 

//funtions as parameters
function logGreeting(fn){
    fn();
};
logGreeting(greet);
//estamos pasando la función greet como parámetro e invocando con el argumento fn

//function expression
let greetMe = function (){
    console.log("Hello from the function expression");
}
greetMe();
//
logGreeting(greetMe);

//Arrow functions

let mifuncion = () => {
    console.log("mi funcion");

}
mifuncion();

let saludo = (nombre, edad) => {
    console.log ("Hola " + nombre + " " +edad )
}
saludo("kenia", "20");

//Ausencia de las llaves de la función
let saludo2 = (nombre, edad ) => console.log("Hola " + nombre + " " +edad );
saludo2("kenia", "20");

//INTERPOLACION EN CADENAS -console.log("Hola " + nombre + " " +edad );
//TEMPLATE STRING
let saludo3 = (nombre, edad ) => console.log(`Hola ${nombre} desde un template string ${edad}` );
saludo3("kenia", "20");


//función con único parámetro
let cuadrado = numero => {
    return numero * numero;
}
console.log(cuadrado(3));

//Ausencia de la palabra return

let cuadrado2 = numero =>  numero * numero;
 console.log(cuadrado2(2));

 //refactor para la función greet() ES6

 let greet2=()=> console.log("greet refactor ES6");
     greet2();

 //refactor para la función logGretting() ES6

 let logGreeting2= funcion => funcion();
logGreeting2(greet2);

 // refactor para la función greetMe() ES6

 let greetMe2 = () => console.log("Hello from the function expression ES6");
greetMe2();   */


//PRÁCTICA No.3


let logGreeting = (miParametro) => miParametro ();
logGreeting(function () {
    console.log ("Hello from a function created on the fly")
})
  //INTERPOLACION EN CADENAS -console.log("Hola " + nombre + " " +edad );
let saludo2 = (nombre, edad ) => console.log("Hola " + nombre + " " +edad );
saludo2("kenia", "20");

 //TEMPLATE STRING
let saludo3 = (nombre, edad ) => console.log(`Hola ${nombre} desde un template string ${edad}` );
saludo3("kenia", "20");