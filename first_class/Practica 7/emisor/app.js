//const Emitter = require("./emitter");
var Emitter = require("events");
/*El event emitter de node js funciona igual que el emitter propio
solo que este tiene mas datos como lo es un contador de eventos.*/
const config = require("./config");
/*Funciona igual que cuando solo se escrbia el "greet" o "jump" pues se le esta
el valor del atributo del objeto config haciendo que sea el mismo valor como
si se pusiera el string directamente.*/
let emtr = new Emitter();

emtr.on(config.events.GREET,() =>{
    console.log("Somewhere, someone said hello");
});

emtr.on(config.events.GREET, () =>{
    console.log("A greeting ocurred");
});

console.log(emtr);
emtr.emit("greet");
/*Las funciones se agregan a greet usando el metodo on
cuando se llama el metodo emit y se pasa el parametro greet
se llama a las funciones.*/
emtr.on(config.events.JUMP, () =>{
    console.log("someone jumped");
});

console.log(emtr);
emtr.emit("jump");
/* Ocurre lo mismo, se agregan la funcion jump con el metodo on
y cuando se llama el metodo emit y se pasa jump como parametro llama solo a esta funcion
ahora emtr en su atributo events el cual es un objeto tiene el atributo greet y el atributo jump
los cuales son 2 arrays con las funciones.*/