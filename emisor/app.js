var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', () => {
    console.log('Somewhere, someone said hello.');
});

emtr.on('greet', () => {
    console.log('A greeting occurred');
});

console.log('Hello!');
emtr.emit('greet');
//Explicacion: La funcion 'on' recibe el 2 parametros, un tipo y un comportamiento. En este caso estamos poniendole de tipo/nombre 'greet' y el comportamiento es una funcion. Al ejecutar la funcion emit, esta busca en el constructor alguna propiedad con el nombre/tipo 'greet' y al encontrarla accede al valor de esta y recorre todos los elementos del array con un forEach.


emtr.on('jump', () => {
    console.log('someone jumped');
});

console.log(emtr);
emtr.emit('jump');
//Explicacion: En la funcion emit se busca que haya alguna propiedad con un nombre llamado "jump", si es que existe con un forEach recorres todos los elementos que tenga el array de dicha propiedad y ejecuta cada elemento del array como una funcion. Emmit tiene la forma de evento jump.