/*
function greet() {
    console.log('Hello');
}
greet();

//functions as parameters
function logGretting(fn){
    fn()
}
logGretting(greet)

//function expression
let greetMe = function (){
    console.log('Hello from the function expression')
}
greetMe()
logGreeting(greetMe)
//function are first class, pass it as a parameter
*/
let greet = () =>  {
    return 'Hello'
}
console.log(greet())

let logGretting = (fn) => fn() 
console.log(logGretting(greet))

let greetMe = () => {
    return 'Hello from the function expression'
} 
console.log(greetMe())
console.log(logGretting(greetMe))