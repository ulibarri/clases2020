var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', () => {
    console.log('Somewhere, someone said hello');
});

emtr.on('greet', () => {
    console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit('greet');

emtr.on('jump', () => {
    console.log('someone jumped!');
});

console.log(emtr) // se convierte en array y desplegara su contenido 
emtr.emit('jump'); // Llama a las funciones que pertenecen al nombre seleccionado y despliega su contenido