let obj = {
    nombre: 'Luis',
    apellido: 'Leyva',
    edad: 44,
    keypress: function () {
        console.log('Se ha oprimido una tecla')
    },
    mouseOver: function () {
        console.log('El puntero del mouse esta arriba')
    }
}

console.log(obj);
console.log(`Tu nombre completo es: ${obj.nombre} ${obj.apellido}`);
console.log(`Tu nombre completo es: ${obj ['nombre']} ${obj ['apellido']}`);

let myKey = 'nombre';
console.log(`Tu nombre es: ${obj [myKey]}`);

myKey = 'apellido'
console.log(`Tu apellido es: ${obj [myKey]}`);

myKey = 'keypress';
console.log( obj [myKey] ());
myKey = 'mouseOver';
console.log(obj [myKey] ());


let myArray = [];

myArray.push(5);
myArray.push('Una cadena');
myArray.push(obj);
myArray.push(function () {
    console.log('Buenas desde el Array');
})

console.log(myArray);
console.log(myArray[2].nombre);
myArray[2].mouseOver();
myArray[3]();


let funcArray = [];

funcArray.push (() =>{
    console.log('Function 1');
});

funcArray.push (() =>{
    console.log('Function 2');
});

funcArray.push (() =>{
    console.log('Function 3');
});

funcArray.forEach((item) =>{
    item();
})