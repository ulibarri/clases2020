function greet() {
    console.log('Hello');
}
greet(); //Invoke

//Functions as parameter
function logGreeting(fn) {
    fn();
};
logGreeting(greet);

//Function expression
let greetMe = function () {
    console.log('Hello from the function expression');
}
greetMe();

//Functions are first class, pass ot as a parameter
logGreeting(greetMe);

// Arrow functions refactor
let greetV2 = () => {
    console.log('Hola desde Arrow Functions')
}
greetV2();

// Arrow functions w/ parameters
let logGreetingV2 = (fn) => {
    fn()
}
logGreetingV2(greetV2)

// Arrow functions w/ only 1 parameter
let greetMeV2 = () => {
    console.log('Hola desde GreetMeV2')
}
greetMeV2();

// Arrow functions w/ parameters but without brackets
let greetMeV3 = (fn) => fn()
greetMeV3(greetMeV2)

// Arrow functions w/ only 1 parameter without brackets
let greetMeV4 = fn => fn()
greetMeV4(greetMeV2)