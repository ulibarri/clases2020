var Emitter = require ("./emitter");

var emtr = new Emitter();

emtr.on("greet", () => {
    console.log("Somewhere, someone said hello.");
});

emtr.on("greet", () => {
    console.log("A greeting occurred!");
});

console.log("Hello!");
emtr.emit("greet");

// se imprime los eventos que se guardaron en el forEach gracias al emitter

emtr.on("jump",() =>{
    console.log("someone jumped!");
});

console.log(emtr)
emtr.emit("jump");

//primero imprime todo el emitter completo, y despues se imprime la funcion emit que contiene "jump"