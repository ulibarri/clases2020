const Emitter = require('./emitter');

const emtr = new Emitter();
emtr.on('greet', () => console.log('Somewhere,someone say hello'));
emtr.on('greet', () => console.log('A gretting occurred!'));
console.log('Hello');
emtr.emit('greet');
// ! Explicacion:
// ! Las funciones son agregadas al evento greet a travez del metodo on
// ! Al llamar al metodo emit y pasar como parametro el evento greet las funciones asignadas a ese evento son llamadas

emtr.on('jump', () => console.log('Someone jumped'));
console.log(emtr);
emtr.emit('jump');
// ! Ahora emit en tu propiedad events tiene un nuevo atributo que corresponde a jum
