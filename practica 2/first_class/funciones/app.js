// Funciones originales
function greet() {
    console.log('Hello');
}
greet(); 

function logGreeting(fn) {
    fn();
};
logGreeting(greet);

let greetMe = function () {
    console.log('Hello from the function expression')
}
greetMe();

logGreeting(greetMe);

// Refactor de funciones de acuerdo a las especificaciones de ES6
let refGreet = () => {
    console.log('Hello');
}
refGreet();

let refLogGreeting = (fn) => fn()
refLogGreeting(refGreet)

let refGreetMe = () => {
    console.log('Hello from the function expression')
}
refGreetMe()

let flyLogGreeting = (fn) => fn()
flyLogGreeting(function(){
    console.log('Hello from a function created on the fly')
})
