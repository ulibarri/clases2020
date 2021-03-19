var Emitter = require('./emitter')

var emtr = new Emitter()

emtr.on('greet', () => {
    console.log('somwhere', 'someone', 'someone said hi')
})
emtr.on('greet', () => {
    console.log('a greeting ocurred!')
})
console.log('hello')
emtr.emit('greet')
//se imprimen todos los mensajes
emtr.on('jump',()=>{
    console.log('someone jumped')
})
console.log(emtr)
emtr.emit('jump')
//imprime la estructira de la funcion