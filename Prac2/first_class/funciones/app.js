function greet() {
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