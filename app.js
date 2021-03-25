//const Emitter=require('./emitter');
var Emitter=require('./events')
var config=require('./config')
let emtr=new Emitter();
let config=new config();

emtr.on('./greet', ()=>{
    console.log('Somewhere, someone said hello')
})

emtr.on(config.events.GREET,()=>{
    console.log('Somewhere, someone said hello')
})


emtr.on('greet',()=>{
    console.log('A greeting occurred')
})

console.log(emtr)
emtr.emit('greet')

emtr.on('jump',()=>{
    console.log('Someone jumped')
})
console.log(emtr);
emtr.emit('jump')
