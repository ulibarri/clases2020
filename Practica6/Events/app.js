/*
let obj = {
    nombre: 'Edson',
    edad: 20,
    apellido: 'Rodríguez'
}

console.log(obj.nombre);
console.log(obj['nombre']);

let myKey = 'nombre';
console.log(obj[myKey]);
//Retorna solamente el valor que se encuentra en "nombre"
*/
/* - . - . - . - . - . - . - . - . - . - . - . - . - . - . - . - . - . - . - . - . - . - . - */

let obj ={
    nombre: "Edson",
    edad: 20,
    apellido:"Rodríguez",
    keypress: function(){
        console.log('Se ha presionado una tecla');
    },
    mouseOver: function() {
        console.log('El puntero del mouse esta arriba');
    }
}

console.log(obj.nombre);
console.log(obj['nombre']);

let myKey = 'nombre';
console.log(obj[myKey]);

myKey = 'keypress';
console.log(obj[myKey]());
myKey = 'mouseOver';
console.log(obj[myKey]());

// Se muestra 3 veces el nombre establecido en la función y posteriormente se muestra el aviso "Se ha presionado una tecla"
// junto con undefinded y posteriormente sucede algo similar pero con el aviso "El puntero del mouse esta arriba"

/* - . - . - . - . - . - . - . - . - . - . - . - . - . - . - . - . - . - . - . - . - . - . - */

let myArray = [];
myArray.push(4);
myArray.push('una cadena');
myArray.push(obj);
myArray.push( function (){
    console.log("hola desde el array");
 })
console.log(myArray);
// Esta llamada a consola muestra el array que hemos creado así como todo lo que este contiene, teniendo los valores que
//recientemente en la posición 0 el número 4, en la posición 1 el string 'una cadena', y en la posición 3 el objeto 'obj'

console.log(myArray[2].mouseOver());
//La función se ejecuta de manera normal, sin ninguna alteración aparente

console.log(myArray[3]());
//Imprime la posición 3 del array, en la cual no hay nada

/* - . - . - . - . - . - . - . - . - . - . - . - . - . - . - . - . - . - . - . - . - . - . - */

let funcArray = [];

funcArray.push(() => {
    console.log("Function 1")
})

funcArray.push(() => {
    console.log("Function 2")
})

funcArray.push(() => {
    console.log("Function 3")
})

funcArray.forEach((item) =>{
    item();
})
//Manda a llamar al arreglo "funcArray" mostrando sus respectivos elementos