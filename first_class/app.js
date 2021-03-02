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
function greet() {
   console.log('Hello')
}
//greet()

let logGretting = (fn) => fn() 
//logGretting(greet)
/*logGretting(function () {
    console.log('Hello from the function expression')
})*/

let greetMe = () => console.log('Hello from the function expression')
 
/*greetMe()
logGretting(greetMe)*/

let logGreeting1 = (miNombre, miColor)=>{
    console.log(`Hola ${miNombre} buenos dias! tu color favorito es el ${miColor}`)
}
//logGreeting1('Dylan', 'Morado')
