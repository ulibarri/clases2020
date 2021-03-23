const   Emitter = require('./emitter')

let emtr = new Emitter()

emtr.on('greet', ()=>{
    console.log('Somewhere, someone said hello')
})

emtr.on(config.events.GREET, ()=>{
    console.log('A greeting ocurred!')
})

console.log(emtr)
emtr.emit('greet')
emtr.on('jump', ()=>{
    console.log('someone jumped!')
})
console.log(emtr)
emtr.emit('jump')
var Emmitter = require('events')