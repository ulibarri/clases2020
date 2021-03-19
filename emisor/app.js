var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', () => {
    console.log("Somewhere, someone said hello");
});

emtr.on("greet", () => {
    console.log("A greeting occurred!");
});
console.log("Hello");
emtr.emit("greet");
//Se imprimen los eventos almacenados  en el forEach del Emmiter
emtr.on("jump", () => {
    console.log("someone jumped");
});

console.log(emtr) //Se imprime todo el codigo de Emitter
emtr.emit("jump"); //Se "invoca" la funcion emit e imprime lo contenido en jump