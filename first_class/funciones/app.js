let greet = () => console.log('Hello');

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