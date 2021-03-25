//const Emitter = require("./emitter"); //inyectar la dependencia
var Emitter = require("events");
const config = require("./config");
let emtr = new Emitter(); //genero la instancia

emtr.on(config.events.GREET, () => {
    console.log("Somewhere, someone said hello.");
});
// al hacer el cambio que se indica que es cambiar de nuestro emitter a los 
// evento de js se imprime con mejor estructura y se cuentan los eventos

emtr.on(config.events.GREET, () => {
    console.log("A greeting occurred!");
});

console.log(emtr);
emtr.emit("greet");

//primero se muestra el contenido del emtr y se invocan las funciones greet
emtr.on(config.events.JUMP, () => {
    console.log("someone jumped!");
});

console.log(emtr)
emtr.emit("jump");
//se crea un nuevo evento llamdo jump 
//luego se invoca el contenido del emtr
//se invoca el evento jump
