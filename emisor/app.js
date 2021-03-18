var Emitter = require('./emitter')

var emtr = new Emitter()

emtr.on('greet', () => {
    console.log('Somewhere, someone said hello.')
})

emtr.on('greet', () => {
    console.log('A greeting occurred!')
})

console.log('Hello!')
emtr.emit('greet') //Se imprimen los eventos

emtr.on('jump', () => {
    console.log('someone jumped!') //como no hay ninguna key llamada 'jump' se crea una que guarde el mensaje
})

console.log(emtr) //Se imprime Emitter
emtr.emit('jump') //Se ejecuta la función emit imprimiendo el contenido de 'jump