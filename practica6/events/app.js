/**  
let obj = {
    nombre: 'Jonathan',
    edad: 20,
    apellido: 'Rodriguez'
};

console.log(obj.nombre);
console.log(obj['nombre']);
//Se imprime solamente mi nombre dos veces, 
//ya que solo estoy llamando a una propiedad del let

let myKey = 'nombre';
console.log(obj[myKey]);
//Se vuelve a imprimir solo mi nombre otra vez ya que en el let solo declaro que tiene nombre
*/

 
let obj = {
    nombre: 'Jonathan',
    edad: 20,
    apellido: 'Rodriguez',
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

myKey = 'keypress';
console.log(obj[myKey]());
myKey = 'mouseOver';
console.log(obj[myKey]());
//Sucedo lo mismo que en el anterior se imprime mi nombre tres veces 
//ya que lo mando a llamar ese numero de veces, al igual se imprimen 
//las propiedades keypress y mouseOver


let myArray = [];

myArray.push(4);
myArray.push('una cadena');
myArray.push(obj);
myArray.push(function () {
    console.log("hola desde el array");
});
console.log(myArray);
//Se imprime todos los push mas sin embargo donde hay un function no se invocan correctamente

console.log(myArray[2][myKey]());
//Se invoca la funcion mouseOver alojado en la posicion dos de myArray

console.log(myArray[3]());
//Se invoca la funcion anónima que esta en la posicion 3 de myArray



let functArray = [];

functArray.push(() => {
    console.log("Function 1");
})

functArray.push(() => {
    console.log("Function 2");
})

functArray.push(() => {
    console.log("Function 3");
})

functArray.forEach((item) => {
    item();
})
//Se imprime imprime en orden las funciones