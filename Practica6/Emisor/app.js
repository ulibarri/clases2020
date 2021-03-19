var Emitter = require('./emitter');

var emtr = new Emitter()

emtr.on('greet', () =>{
    console.log('Somewhere, someone said hello')
})

emtr.on('greet', () => {
    console.log('A greeting ocurred!')
})

console.log('Hello!');
emtr.emit('greet')

emtr.on('jump', () => {
    console.log('someone jumped!')
})

console.log(emtr)
emtr.emit('jump')
// Manda a llamar la estructura de la función imprimiendo todos los mensajes por consola 