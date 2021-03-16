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

console.log(obj.nombre); //Como normalmente se hace, aqui se manda a llamar al atributo nombre del objeto
console.log(obj['nombre']); //Se imprime el atributo escrito entre parentesis

let myKey = 'nombre';
console.log(obj[myKey]);//Imprime el contenido del atributo nombre a traves de una key del objeto

myKey = 'keypress';
console.log(obj[myKey]());
myKey = 'mouseOver';
console.log(obj[myKey]());
//En esta ocasion se mandan a llamar las funciones dentro de los atributos keypress y mouseOver, a traves 
//de elementos de tipo String, se muestra el texto impreso dentro de las funciones mas aparte se imprime undifne en dos ocasiones.

let myArray = [];

myArray.push(4);
myArray.push('una cadena');
myArray.push(obj);
myArray.push(function () {
    console.log("Hola desde el array")
});

console.log(myArray); //Se imprime el contendio del array myArray
console.log(myArray[2][myKey]()); //Se llama a la funcion mouseOver que se encuentra dentro del objeto que esta en la posicion 2 del Array
console.log(myArray[3]()); //De esta manera se manda a llamar la funcion ubicada en la posición 3 del array

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

funcArray.forEach((item) => {
    item();
})
//Utilizando el metodo forEach, se ejectua una función por cada elemento que compone el array de manera ordenada




