function greet() {
    console.log('Hello');
}
greet(); // invoke

function logGreeting(fn) {
    fn();
}
logGreeting(greet)

let greetMe = function () {
    console.log('Hello from the function expresion');
}
greetMe();

logGreeting(greetMe);

let refGreet =  () => {
    console.log('Hello');
}

refGreet()

let refLogGreeting = (fn) => {
    fn()
}
refLogGreeting(refGreet)

let refGreetMe = () => {
    console.log('Hello from the function expresion');
}
refGreetMe()