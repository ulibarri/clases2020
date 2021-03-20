var Emitter = require('./emitter.js')

var emtr = new Emitter();

emtr.on('greet', ()=>{
    console.log('somewhere, someone said hello')
});

emtr.on('greet', ()=>{
    console.log('A greet ocurred!')
});

console.log('hello!');
emtr.emit('greet');