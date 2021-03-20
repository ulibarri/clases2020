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