//Originales
function greet(){
    console.log('Hello')
}
greet()

function logGreeting(fn){
    fn()
}
logGreeting(greet)

let greetMe = function(){
    console.log('Hello from the function expression')
}
greetMe()

logGreeting(greetMe)

//Funcion flecha ejemplo
let mifuncion = () => {
    console.log('si jalo la funcion')
}
mifuncion()

//Refactor de funciones de acuerdo a las especificaiones de ES6
let refGreet = () => {
    console.log('Hello')
}
refGreet()

let refLogGreeting = (fn) => fn()
refLogGreeting(refGreet)

let refGreetMe = () => {
    console.log('Hello from the function expression')
}
refGreetMe()

//Ejemplo Fly

let flyLogGreeting = (fn) => fn()
flyLogGreeting(function(){
    console.log('Hello from a fuction created on the fly')
})