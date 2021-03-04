// function greet() {
//     console.log('Hello');
// }

// greet();


// function logGreeting(fn) {
//     fn();
// }

// logGreeting(greet);

// let greetMe = function() {
//     console.log('Hello from the function expression')
// }

// greetMe();

// logGreeting(greetMe);

//===================================================================================================================================


const greet = () => console.log('Hello');
greet();


const logGreeting = fn => fn();

logGreeting(greet);

let greetMe = () => console.log('Hello from the function expression');

greetMe();

logGreeting(greetMe);



//Refactorizando con function expression created on the fly ==========================================================================
let logGreeting2 = miParametro => miParametro();
logGreeting2(() => {
    console.log(`Hello from function expression created on the fly`);
});