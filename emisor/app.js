var emmiter = require('./emitter')

var emtr = new emmiter()

emtr.on('greet', () => {
    console.log('someone said helloo :)')
})

emtr.on('greet', () => {
    console.log('a greeting occurred!')
})

console.log('hello!')
emtr.emit('greet')

emtr.on('jump', () => {
    console.log('someone jumped!')
})

// Aqui se muestran los eventos del emisor, greet y jump 
// las cuales tienen funciones anonimas, 
// mientras que la segunda linea invoca a jump.
console.log(emtr)
emtr.emit('jump')