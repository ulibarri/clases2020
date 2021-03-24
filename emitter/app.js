//const Emitter = require('./emitter.js');
var Emitter = require('./emitter.js');
const Config = require('./config.js')

let emtr = new Emitter();

emtr.on(Config.events.GREET, ()=>{
    console.log('somewhere, someone said hello.');
});

emtr.on('greet',()=>{
    console.log('A greeting ocurred!');
})

emtr.on('jump', ()=>{
    console.log('someone jumped!')
})

console.log(emtr);
emtr.emit('greet');


console.log(emtr)
emtr.emit('jump')