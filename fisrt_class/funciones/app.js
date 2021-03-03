function greet() {
    console.log('Hello');
};

greet(); 

function logGreeting(fn) {
    fn();
};
logGreeting(greet);

let greetMe = function() {
    console.log('Hello from the function expression')
} 

greetMe();
logGreeting(greetMe);

let greetES6 = () => console.log('Hello');
let logGreetingES6 = (fn) => fn();
let greetMeES6 = () => console.log('Hello from the function expression');

greetES6();
logGreetingES6(greetES6);
greetMeES6();