var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', () => {
    console.log('Somewhere, someone said hello.');
})

emtr.on('greet', () =>{
    console.log('A greeting ocurred!');
});

/*Se invocan las funciones almacenadas en el forEach
de "emmiter"*/
console.log('Hello!');
emtr.emit('greet')

emtr.on('jump', () => {
    console.log('someone jumped!');
})

console.log(emtr)
emtr.emit('jump');
/*Se crea un nuevo array, se le pasa el contenido de 
jump y se invoca a la funcion emit*/