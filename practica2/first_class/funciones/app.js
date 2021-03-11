function greet() {
    console.log('hello')
}
greet()

function logGreeting(fn) {
    fn()
}
logGreeting(greet)

let greetMe = function () {
    console.log('hello from the function expression')
}
greetMe()
logGreeting(greetMe)