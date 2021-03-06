function greet(){
    console.log('hello')    
}

greet(); //invoke

function logGreeting(fn){
    fn();
};
logGreeting(greet);

let greetMe = function(){
    console.log('hello from the function expression');
}
greetMe();

logGreeting(greetMe);

//ejemplo
let comentario = (nombre, cc) =>{
    console.log('saludos' + nombre + ' ' + cc )
} 

comentario(' Mario ', ' buenas noches ');


//refactores
let greetA = () => {
   console.log('hello')
}
greetA();

let logGreetingA = (fn) => {
    fn();
}
logGreetingA(greetA);

let greetMeA = () =>{
    console.log('hello from the function expression')
}
greetMeA();

logGreetingA(greetMeA);