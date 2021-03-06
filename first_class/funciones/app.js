let greet = () => console.log('Hello from greet');

greet(); //invoke

//functions as parameters
let logGreeting = (fn) => fn();

logGreeting(greet);
//estamos pasando la función greet como
//parámetro e invocandola con el nombre de argumento fn

//function expression
let greetMe = () => console.log('Hello from the function expression');

greetMe();

logGreeting(greetMe);
//functions are first class, pass it as a parameter

//Arrow functions
//Function expression
let saludo = (name) => {console.log('Saludos ' + name + ' desde la arrow function'); }
saludo('Ivan');

let saludo2 = (name) => console.log('Saludos ' + name + ' desde la arrow function sin corchetes'); 
saludo2('Pepe');

let pow = (numero) => {return numero * numero};
console.log(pow(2));

let pow2 = numero => numero * numero;
console.log(pow2(4)); 


//PRACTICA 3

//function created on the fly
let onTheFly = (val) => {
    console.log("Function created on the fly")
    val ()
}

onTheFly(function (){
    console.log("Hello from the function created on the fly")
});


//template strings
let saludo3 = (name, lastname) => {
    console.log(`Este es un saludo que enviamos para ${name} de apellido ${lastname}`);
}
saludo3("Ivan", "Medrano");