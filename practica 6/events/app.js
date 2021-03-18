let obj = {
    nombre: 'Eduardo',
    edad: 20,
    apellido: 'Lopez',
    keypress: function () {
        console.log('Se ha presionado una tecla');
    },
    mouseOver: function () {
        console.log('El puntero del mouse está arriba');
    }
}

console.log(obj.nombre);
console.log(obj['nombre']);

let myKey = 'nombre'
console.log(obj[myKey]);
// Se imprime una vez más el nombre ingresado anteriormente en el objeto obj.

myKey = 'keypress';
console.log(obj[myKey]());
myKey = 'mouseOver';
console.log(obj[myKey]());
// Se imprimieron los mensajes que se ingresaron en las funciones keypress y mouseOver, junto a la
// palabra undefined debajo de ellos.

let myArray = [];

myArray.push(4);
myArray.push('una cadena');
myArray.push(obj);
myArray.push(function () {
    console.log("hola desde el array");
})
console.log(myArray);
// Se imprime el contenido del array (número 4, el mensaje 'una cadena', más los datos nombre,
// edad y apellido y las funciones keypress y mouseOver del objeto obj, y por último una función
// marcada entre paréntesis como anonymous).

console.log(obj.mouseOver());
// Se imprime el mensaje ingresado en la función mouseOver del objeto obj, junto a la palabra
// undefined debajo del mensaje.

console.log()
//
//

let funcArray = [];

funcArray.push(() => {
    console.log("Function 1");
});

funcArray.push(() => {
    console.log("Function 2");
});

funcArray.push(() => {
    console.log("Function 3");
})

funcArray.forEach((item) => {
    item();
})
// Se imprimieron los mensajes function1, function2 y function3 uno después del otro
