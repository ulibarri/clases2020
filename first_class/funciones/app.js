function greet(){
    console.log('Hello');
}
let logGreeting = (miParametro) => miParametro();
logGreeting(function (){
    console.log('Hello from a function created on the fly')
});

//interpolacion de strings 
let logGreeting1 = (miNombre, miColor) => {
    console.log(`Hola ${miNombre} buenos dias! Tu color favorito es el ${miColor}`);
}
logGreeting1("Karla","morado")

/*
//Arrow functions

//Realiza un refactor para la función greet(), de acuerdo a las especificación de ES6 para las funciones flecha
let greet1 = () => console.log('Hello');
greet1();

//Realiza un refactor para la función logGretting(), de acuerdo a las especificación de ES6 para las funciones flecha
let logGreeting1 = (fn) => fn();
logGreeting(greet1);

//Realiza un refactor para la función greetMe(), de acuerdo a las especificación de ES6 para las funciones flecha
let greetMe1 = () => console.log('Hello from the function expression');
greetMe1();
logGreeting1(greetMe1); */