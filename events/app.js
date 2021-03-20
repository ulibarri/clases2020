let obj = {
    nombre: 'Carlos',
    edad: 44,
    apellido: 'Ulibarri',
    keypress: function () {
        console.log('Se ha presionado una tecla');
    },
    mouseOver: function () {
        console.log('El puntero del mouse esta arriba');
    }
}

console.log(obj.nombre);
console.log(obj['nombre']);

let myKey = 'nombre'
console.log(obj[myKey]);

myKey = 'keypress';
console.log(obj[myKey]());
myKey = 'mouseOver';
console.log(obj[myKey]());
// Pues lo que sucede es que muestra el nombre del objeto

//Salen los mensajes de que se ha presionado una telca y el de El puntero del mouse esta arriba
//lo unico que nose es porque dice undefined entre cada uno de esos mensajes.

let myArray =[];

myArray.push(4);
myArray.push('una cadena');
myArray.push(obj);
myArray.push(function (){
    console.log('hola desde el array')

})

console.log(myArray);
//Muestra lo que este en el array
console.log(myArray[2].mouseOver)
//Mostramos la funcion mouseOver de obj
console.log(myArray[3])
//Mostramos la funcion que habiamos agregado

let funcArray = [];

funcArray.push(() =>{
    console.log('Function 1');
})

funcArray.push(() =>{
    console.log('Function 2');
})

funcArray.push(() =>{
    console.log('Function 3');
});

funcArray.forEach((item) => {
    item();
})