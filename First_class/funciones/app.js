function greet(){
    console.log('Hello');
}
greet(); //invoke

//functions as parameters
function logGreeting(fn) {
    fn();
}
logGreeting(greet);
//estamos pasando la función greet como
//parámetro e invocandola con el nombre del argumento fn

//function expression
let greetMe = function () {
    console.log('Hello from the function expression');
}
greetMe();
logGreeting(greetMe);

let Rgreet = () => console.log('Hello');

let RlogGreeting = fn => fn();

let RgreetMe = () => console.log('Hello from the function expression');

Rgreet();
RlogGreeting(Rgreet);
RgreetMe();
RlogGreeting(RgreetMe);