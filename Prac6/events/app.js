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

let myKey = 'nombre';
console.log(obj[myKey]);
//El nombre es mencionado 3 veces en la terminal

myKey = 'keypress';
console.log(obj[myKey]());
myKey = 'mouseOver';
console.log(obj[myKey]());
//Detecta el presionado de tecla y el puntero cuando el mouse está arriba

let myArray = [];

myArray.push(4);
myArray.push('una cadena');
myArray.push(obj);
myArray.push(function () {
    console.log("Hola desde el array");
})
console.log(myArray);