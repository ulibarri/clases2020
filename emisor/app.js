var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', () => {
    console.log('Somewhere, someone said hello');
})

emtr.on('greet', () =>{
    console.log('A greeting ocurred!');
});

//Al haber dos funciones llamadas 'greet' y posteriormente invocar una sola llamada a 'greet' se invocará las dos funciones recientemente creadas desde el emisor de eventos.
console.log('Hello!');
emtr.emit('greet')

emtr.on('jump', () => {
    console.log('someone jumped!');
})

//ahora emit se encarga de invocar la función jump previamente creada dentro del emisor de eventos
console.log(emtr)
emtr.emit('jump');