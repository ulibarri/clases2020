let obj = {
    nombre: 'Roberto',
    edad: 22,
    apellido: 'Tapia',
    keypress: function (){
        console.log('Se ha presionado una tecla!');
    },
    mouseOver: function(){
        console.log('El puntero del mouse esta arriba')
    }
}

console.log(obj.nombre);
console.log(obj['nombre']);

let myKey = 'nombre'
console.log(obj[myKey]);
//Da como resultado, el despliegue del contenido de dicho elemento, en este caso Nombre

myKey = 'keypress';
console.log(obj[myKey]());
myKey = 'mouseOver';
console.log(obj[myKey]());
//Se activan cada uno de los eventos

let myArray = [];
myArray.push(4);
myArray.push('Una cadena');
myArray.push(obj);
myArray.push(function () {
    console.log('Hola desde el array')
})
console.log(myArray)
console.log(myArray[2][myKey]());// Se llama a la funcion que se encuentra dentro del objeto que esta en la posicion 2 del array
console.log(myArray[3]()); // Mandamos a llamar la funcion ubicada en la posicion 3 del array

let funcArray = [];

funcArray.push(() => {
    console.log('Function 1');
});

funcArray.push(() => {
    console.log('Function 2');
});

funcArray.push(() => {
    console.log('Function 3');
});

// Lo que realiza el metodo forEach, es una funcion que despliega los elementos dentro de una estructura y los muestra de manera ordenada
funcArray.forEach((item) => {
    item();
})
