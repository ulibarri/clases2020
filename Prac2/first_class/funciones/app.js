/*function greet() {
    console.log('Hello');
}
greet(); //invoke

function logGreeting(fn) {
    fn();
};
logGreeting(greet);

let greetMe = function () {
    console.log('Hello from the function expression');
}
greetMe();

logGreeting(greetMe);
*/
//------------------------ES6-----------------------------

let greet = () => {
    console.log('Hello');
}
greet();
let logGreeting = (fn) => {
    fn();
}
logGreeting(greetArrowFunction);
let greetMe = () => {
    console.log('Hello from the function expression');
}
greetMe();
logGreeting(greetMe);
let miFunction = (something) => {
    console.log(something);
}
