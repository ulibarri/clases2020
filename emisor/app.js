var emmiter = require('./emitter')

var emtr = new emmiter()

emtr.on('greet', () => {
    console.log('someone said hellooo')
})

emtr.on('greet', () => {
    console.log('a greeting occurred!')
})

console.log('hello!')
emtr.emit('greet')

emtr.on('jump', () => {
    console.log('someone jumped!')
})

// Muestra los eventos del emisor, greet y jump las cuales tienen funciones anonimas, la segunda linea invoca al evento jump
console.log(emtr)
emtr.emit('jump')