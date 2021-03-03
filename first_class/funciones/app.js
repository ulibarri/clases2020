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