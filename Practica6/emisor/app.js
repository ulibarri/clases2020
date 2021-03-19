var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', ()=>{
    console.log('Somewhere, someone said Hello');
});

emtr.on('greet', ()=>{
    console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit('greet');

//Se imprimen los mensajes

emtr.on('jump', ()=>{
    console.log('someone jumped!');
});

console.log(emtr);
console.log('jump');

//Imprime la estrcutura de la funcion 