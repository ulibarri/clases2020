
let obj = {
    nombre: 'Gabino',
    edad: 44,
    apellido: 'Morales',

    keypress: function() {
        console.log('Se ha presionado una tecla')
    },

    mouseOver: function() {
        console.log('El puntero el mouse esta arriba')
    }
}

let myKey = 'nombre'
console.log(obj[myKey]);


console.log(obj.nombre);
console.log(obj['nombre']);

myKey = 'keypress';
console.log(obj[myKey])

myKey = 'mouseOver';
console.log(obj[myKey])

// Se puede acceder a las propiedades desde corchetes 

let myArray = [];

myArray.push(4);
myArray.push('una cadena');
myArray.push(obj);
myArray.push(function() {
   console.log('Hola desde la funcion')
});

console.log(myArray);
myArray[2].mouseOver();
myArray[3]();

let funcArray = [];

funcArray.push(() => {
    console.log('function 1');
});

funcArray.push(() => {
    console.log('function 2');
});


funcArray.push(() => {
    console.log('Function 3')
})


funcArray.forEach(item => {
    item();
});
//En forEach lo que hace es recorrer cada elemento del array