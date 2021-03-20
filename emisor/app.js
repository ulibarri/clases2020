var Emitter = require('./emitter.js');

var emtr = new Emitter();

emtr.on('greet', ()=>{
    console.log('Somewhere, someone said hello.');
});

emtr.on('greet', ()=>{
    console.log('A greeting ocurred!');
});

console.log('Hello!');
emtr.emit('greet');
//Pues se ve el mensaje de hello y se detecta que se mando un saludo entonces se manda el mensaje de somewhere, someone said hello
//y tambien en el de greet, el cual detecto que ubo un greet y manda su respectivo mensaje.

emtr.on('jump', () => {
    console.log('someone jumped!');
});

console.log(emtr)
emtr.emit('jump');

//Primero se manda un mensaje con todo lo que contiene el emtr (tiene forma como i se tratara de una clase o un objeto.), y despues se utiliza la funcion de jump.