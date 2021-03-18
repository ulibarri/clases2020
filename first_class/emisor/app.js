var Emitter = require ("./emitter");

var emtr = new Emitter();

emtr.on("greet",() =>{
    console.log("Somewhere, someone said hello");
});

emtr.on("greet", () =>{
    console.log("A greeting occurred!");
});

console.log("Hello");
emtr.emit("greet");
/*Las funciones son agregadas al evento greet a travez del metodo on
cuando se llama a emit y pasar como parametro el evento greet
las funciones asignadas a ese evento son llamadas*/

emtr.on("jump", () =>{
    console.log("Someone jumped");
});

console.log(emtr);
emtr.emit("jump");
/*emit obtiene el atributo jump*/