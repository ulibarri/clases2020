let greet = () => {
    console.log('hello')
}
greet()

let logGreeting = (fn) => {
    fn()
}
logGreeting(greet)

let greetMe = () => {
    console.log('hello from the function expression')
}
greetMe()
logGreeting(greetMe)