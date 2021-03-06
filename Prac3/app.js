function greet() {
    console.log('Hello');
}

let logGreeting = (miParametro) => miParametro();
logGreeting(function() {
    console.log('Hello from a function created on the fly')
})

//Interpolación de strings

let logGreeting1 = (miNombre, miColor) => {
    console.log("Hola " + miNombre + " buenos días! Tu color favorito es el " + miColor);
}
logGreeting1("Carlos","azul");