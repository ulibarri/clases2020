var Emitter = require('./emitter');
var emtr = new Emitter();

emtr.on('greet', () =>{
    console.log('Somewhere, someone said hello');
})
emtr.on('greet', () =>{
    console.log('a greeting occurred');
})
console.log('hello');
/**con emtr.on hace un push a la propiedad greet del objeto this.events 
* y con emtr.emit recore el objeto con la propiedad greet y lo imprime*/
emtr.emit('greet');

emtr.on('jump', () =>{
    console.log('someone jumped');
})
/**es algo similar a lo que se realizo solo que esta vez se agrego otra propiedad al 
 * objeto this.events que se llama jump y imprime lo que se encuentra dentro
 * de la propiedad jump
 */
console.log(emtr);
emtr.emit('jump')