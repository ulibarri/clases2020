var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', () => {
    console.log('Somewhere, someone said hello.');
});

emtr.on('greet', () => {
    console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit('greet');
// Se imprimieron los mensajes 'Hello!', 'Somewhere, someone said hello' y 'A greeting occurred!'
emtr.on('jump', () => {
    console.log('Someone jumped!');
});

console.log(emtr)
emtr.emit('jump');
// Se imprimieron los mensajes anteriores más el objeto Emitter señalando los eventos greet y jump
// con funciones anónimas y después el mensaje 'Someone jumped!'
