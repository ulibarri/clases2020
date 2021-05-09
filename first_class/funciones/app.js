let greet = () => console.log("hello");
greet(); //invoke
//functions as parameters 
let logGreeting = fn => fn();
logGreeting(greet);
 //estamos pasando la función greet como 
 //parametro e invocandola con el nombre del argumento fn 
let greetMe = () =>{
    console.log("hello from the function expression")
}
greetMe();
logGreeting(greetMe);
//functions are first class, pass it as a parameter
