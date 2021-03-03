let greet = () => console.log("Hello");
greet(); //invoke

let logGreeting = fn => fn();

logGreeting(function () {console.log("Hello from a function created on the fly");});

let greetMe = () => console.log("Hello from the function expression");

greetMe();

logGreeting(greetMe);

let logGreeting1 = (miNombre, miColor) => {
    console.log(`Hola ${miNombre} buenos dias! Tu color favorito es el ${miColor}`);
}
logGreeting1("Brandon","morado")