//const Emitter = require('./emitter') //inyecto la dependencia
var Emitter = require('events');
const config = require('./config');

let emtr = new Emitter(); //genero la instancia

emtr.on(config.events.GREET, () => { //Con la modificacion de codigo a la utilizada en el archivo config.js, ahora ya no es necesario utilizar una cadena de texto para definir el nombre de atributo, config se encarga de eso de una manera mas definida evitando asi los errores de escritura que se pudieran presentar
    console.log('Somewhere, someone said hello.');
});

emtr.on(config.events.GREET, () => {
    console.log('A greeting occurred!');
});

console.log(emtr); //Se muestra el contenido del array ubicado en el atributo events, el cual contiene dos funciones creadas anteriormente
emtr.emit('greet'); //A travez del codigo forEach ubicado en el archivo emitter, se ejecutan acada una de las funciones almacenadas en el atributo greet
emtr.on(config.events.JUMP, () => {
    console.log('someone jumped!');
}); //Se crea un nuevo atributo en el objeto events llamado jump, dentro de el se crea una funcion con el texto visto anteriormente

console.log(emtr); //Muestra el contenido del objeto events
emtr.emit('jump'); //Muestra el contenido del atributo jump

//utilizando el event emitter propio de nodejs nos podemos dar cuenta de esta mucho mejor estructurado y cuenta con mas funciones, ha simple vista se nos muestra los eventos con su contendio, de la misma manera un contador de los eventos dentro del EventEmitter
