let obj = {
    nombre: 'alan',
    edad: 44,
    apellido: function(){
        console.log('se ha precionado un tecla');
    },
    mouseOver: function () {
        console.log('el puntero del mouse esta arriba');
    }
}
console.log(obj.nombre);
console.log(obj['nombre']);

let mykey = 'nombre'
console.log(obj[mykey]);

mykey = 'keypress' ;
console.log(obj[mykey])();
mykey = 'mouseOver';
console.log(obj[mykey]());

///
let myarray = [];

myarray.push(4);
myarray.push('una cadena');
myarray.push(obj);
myarray.push(function (){
    console.log("hola desde el array");
})
console.log(myarray);

let funcarray = [];
funcarray.push(  () => {console.log("function 1");});

funcarray.push(  () => { console.log("function 2"); }
);

funcarray.push( () => { console.log ("function 3");
});

funcarray.forEach((item) => {
    item();
})

var emitter = require ('./emitter');
var emtr = new emitter();

emtr.on('greet', () => {
    console.log('a greeting ocurred!');
});

console.log('hello!');
emtr.emit('greet');

emtr.on('jump', () => {
    console.log('someone jumped!');
});

console.log(emtr)
emtr.emit('jumo');