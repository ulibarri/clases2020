let obj = {
    nombre: 'Josue',
    edad: 19,
    apellido: 'Iglesias',
    keypress: function () {
        console.log('Se ha presionado una tecla');
    },
    mouseOver: function () {
        console.log('El puntero del mouse está arriba');
    }
}

console.log(obj.nombre);
console.log(obj['nombre']);

//Asignando el nombre de la propiedad del objeto a una variable podemos tener acceso a dicha propiedad utilizando esa variable
let myKey = 'nombre'
console.log(obj[myKey]);

//De igual manera, utilizando el nombre de la función asignada a una variable, podemos tener acceso a dicha función por medio de la misma variable
myKey = 'keypress';
console.log(obj[myKey]());
myKey = 'mouseOver';
console.log(obj[myKey]());

//En javascript, podemos agregar a un array múltiples tipos de datos, en este caso agregaremos un número, una cadena, un objeto y una función en un mismo array
let myArray = [];

myArray.push(4);
myArray.push('una cadena');
myArray.push(obj);
myArray.push(function () {
    console.log('Hola desde el array');
})
console.log(myArray);

//Invocamos a la función anónima del array haciendo referencia al índice del array con sus respectivos paréntesis para in
console.log(myArray[3]());

let funcArray = [];

funcArray.push(() => {
    console.log("Function 1");
});

funcArray.push(() => {
    console.log("Function 2");
});

funcArray.push(() => {
    console.log("Function 3");
});

//utilizando forEach podemos listar todos los elementos de un array, en este caso, al ser funciones, los estamos invocando  
funcArray.forEach((item) => {
    item();
})



