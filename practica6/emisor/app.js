var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', () => {
    console.log('Somewhere, someone said hello');
})

emtr.on('greet', () => {
    console.log('A greeting ocurred!');
})

console.log('Hello');
emtr.emit('greet');
//Se invocan las funciones creadas que se almacenan en el forEach de emmiter y se impirmer

emtr.on('jump', () => {
    console.log('someone jumped!');
})

console.log(emtr);//Se invoca todo el codigo de emitter
emtr.emit('jump');//Se invoca la funcion emit e imprime el contenido jump