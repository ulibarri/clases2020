//const Emitter = require('./emitter'); //inyecto la dependencia
var Emitter = require('events');

//Lo que paso aqui es que al inyectar la dependencia con el "event emitter" propio de js lo que hace aqui
//es que a la hora de hacer console log nos da un reporte mas detallado de nuestra instancia, mostrandonos
//la cantidad de eventos que tiene cuantas funciones tiene, etc, solamente usando la variable del constructor

var config = require('./config');

//Lo que paso aqui es que al crear el archivo config se creo el objeto events el cual contiene los valores de GREET y JUMP
//para ser llamados sin tener que escribirlos, se reemplazaron los 'type' que anteriormente estaban como 'greet' o 'jump'
//por las llamada a la instancia config que fue inyectada, a la cual llamamos a su objeto llamado events, al cual llamamos
//a los valores de GREET o JUMP que dentro de estos se encuentran 'greet' o 'jump' haciendo nuestros llamados mas estandarizados
//y faciles de encontrar para evitar errores de escritura

let emtr = new Emitter(); //genero la instancia

emtr.on(config.events.GREET, () => {
    console.log('Somewhere, someone said hello.');
});

emtr.on(config.events.GREET, () => {
    console.log('A greeting ocurred!');
});

console.log(emtr);
emtr.emit('greet');

//Aqui lo que paso es que llamamos a el constructor desde el otro archivo y creamo una nueva variable para incializar
//el constructor con sus funciones, la funcion '.on' lo que hace es recibir el nombre de nuestro type y se pushea nuestro
//listener que aqui es el 'console.log' se hace esa misma funcion de dos formas diferentes, al final ejecutamos esa funcion
//con emit que lo que hace que el array que se hizo pusheando los console logs se imprimen todos los valores con la
//función listener

emtr.on(config.events.JUMP, () => {
    console.log('Someone jumped!');
});

//Lo que pasa aqui es que al agregar otro key se crea otro array con las funciones de jump los cuales llamamos
console.log(emtr);
emtr.emit('jump');

