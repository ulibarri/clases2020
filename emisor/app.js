var Emitter=require('./emitter');
var emtr=new Emitter();

emtr.on('greet',()=>{
    console.log('Somewhere said hello');
});

emtr.on('greet', () =>{
    console.log('A greeting occurred')
});
console.log('Hello');
emtr.emit('greet');