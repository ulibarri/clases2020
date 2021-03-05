function greet(){
    console.log('Hello');
}

let logGreeting=(miParametro)=>  miParametro();
logGreeting(greet);
let greetMe=function (){
    console.log('Hello from the funcion expression');
}
greetMe();
logGreeting(greetMe);