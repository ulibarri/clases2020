/*
function greet() {
    console.log("QuePez");
}
greet();

//functions as paameters
function logGreeting(fn){
    fn()
};
logGreeting(greet);

//function explresion
 let greetMe = function (){
     console.log("Hell0 from the function expression")
 }
 greetMe();

 logGreeting(greetMe);
 //Fucntions are first class, pass it as a parameter
*/
/*
function greet(){
    console.log("Hello there");
}
greet();

let logGreeting = (funct1) => funct1()
    logGreeting(greet)
    logGreeting(function (){
        console.log("Hello from the function expression2")
    })
*/
let saludo = (nombre, tratamiento) => console.log("Hola, buen dia " + tratamiento + " " + nombre)
saludo("Luis", "sr");
