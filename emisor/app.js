var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', () => {
    console.log('Somewhere, someone said hello.');
});

emtr.on('greet', () => {
    console.log('A greeting occurred');
});

console.log('Hello!');
emtr.emit('greet');

//La funcion recibe 2 parametros y busca hasta encontrar el valor

emtr.on('jump', () => {
    console.log('someone jumped');
});

console.log(emtr);
emtr.emit('jump');