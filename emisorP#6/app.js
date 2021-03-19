var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', () => {
    console.log("Somewhere, someone said hello.");
});

emtr.on('greet', () => {
    console.log("A greeting ocurred!");
});

console.log("Hello!");
emtr.emit('greet');
//Primero aparece el "Hello!" del console.log y después los console.log de las funciones porque se invocó despues

emtr.on('jump', () => {
    console.log("Someone jumped!");
});

console.log(emtr);
emtr.emit('jump');
//Ahora aparecen las funciones que hay dentro de Emitter, si hay funciones con el mismo nombre aparecerán después 
//del nombre las funciones que hayan