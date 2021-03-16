var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', () => {
    console.log('Somewhere, someone said hello.');
});

emtr.on('greet', () => {
    console.log('A greeting occurred!');
});

console.log('Hello!'); //Imprime Hello!
emtr.emit('greet'); //Las funciones anteriormente creadas, son enviadas a un Array donde por el metodo forEach, se imprime el contenido del Array mostrando el texto que contienen las funciones.

emtr.on('jump', () => {
    console.log('someone jumped!');
});

console.log(emtr); //emtr se convierte en un Array, y con este codigo se imprime el contenido de dicho Array.
emtr.emit('jump'); //LLama las funciones que pertenecen al elemento jump