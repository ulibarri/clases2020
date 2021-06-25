// Revealing module pattern: Con este patrón, solo se exponen las variables y métodos que uno quiere mediante un objeto. En el objeto agregaremos todo aquello a lo que queremos que el usuario tenga acceso mientras que los demás detalles, permanecerán ocultos. El module revealing pattern es una forma muy común de estructurar y proteger el código dentro de los módulos.


let greeting = "Hello from greet 5";

let greet = () => {
    console.log(greeting);
}

module.exports = {
    greet
}