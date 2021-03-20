var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', () =>  {
    console.log('Somewhere, someone said hello.');
});

emtr.on('greet', () =>  {
    console.log('A greetin ocurred!');
});

console.log('Hello!');
emtr.emit('greet');

//Aqui lo que paso es que llamamos a el constructor desde el otro archivo y creamo una nueva variable para incializar
//el constructor con sus funciones, la funcion '.on' lo que hace es recibir el nombre de nuestro type y se pushea nuestro
//listener que aqui es el 'console.log' se hace esa misma funcion de dos formas diferentes, al final ejecutamos esa funcion
//con emit que lo que hace que el array que se hizo pusheando los console logs se imprimen todos los valores con la
//función listener

emtr.on('jump', () => {
    console.log('Someone jumped!');
});

//Lo que pasa aqui es que al agregar otro key se crea otro array con las funciones de jump los cuales llamamos
console.log(emtr);
emtr.emit('jump');