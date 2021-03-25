var emmiter = require('./emitter')

var emtr = new emmiter()

emtr.on('greet', () => {
    console.log('someone said hellooo')
})

emtr.on('greet', () => {
    console.log('a greeting occurred!')
})

console.log('Hola desde app emisor')
emtr.emit('greet')

emtr.on('jump', () => {
    console.log('someone jumped!')
})

emtr.emit('jump')



// Muestra los eventos del emisor, greet y jump que tienen funciones anonimas