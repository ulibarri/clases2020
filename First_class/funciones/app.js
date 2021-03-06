function greet(){
    console.log('Hello');
}
greet(); 

let logGreeting = (miParametro) => miParametro();
logGreeting(function () {
    console.log('Hello from a funtion created on the fly')
})

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

//interpolación de strings "clasica"

let logGreeting1 = (miNombre, miColor) => {
    console.log("Hola "+miNombre+" buenos dias! Tu color favorito es el " + miColor);
}
logGreeting1("Carlos", "azul");