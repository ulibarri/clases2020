function greet(){
    console.log('Hello');
}

greet();

function logGreeting(fn){
    fn();
};
logGreeting(greet);
let greetMe=function (){
    console.log('Hello from the funcion expression');
}
greetMe();
logGreeting(greetMe);