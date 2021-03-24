//const Emitter = require('./emitter'); //Independencia inyectada
var Emitter = require('events');
// Ambos funcionan de la misma manera sin afectar el resultado de la llamada en general más sin embargo,
// el mandar llamarlo por medio de una variable permite observar los eventos que se presentan

const config = require('./config');
// El inyectar esta dependencia hace que las llamadas del emtr funcione de la misma forma, solo que y como es obvio, en
// lugar de escribir la palabra 'jump' o 'greet' simplemente se llama a config a su correspondiente evento 

let emtr = new Emitter(); //Se generá la instancia

emtr.on(config.events.GREET, () => {
    console.log('En algún lado, alguien dice hola');
});

emtr.on(config.events.GREET, () => {
    console.log('¡A ocurrido un saludo!');
})

console.log(emtr);
emtr.emit('greet');

//Las funciones son agregadas a greet a partir del método on, lo cual hace que al momento de utilizar el método emit 
// se manden llamar dichas funciones

emtr.on(config.events.JUMP, () =>{
    console.log('¡Alguien acaba de saltar justo aquí!')
})

console.log(emtr);
emtr.emit('jump');
// Ocurre lo mismo añadiendo el párametro Jump