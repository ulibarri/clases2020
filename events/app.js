let obj = {
    nombre: 'Karla',
    edad: 19,
    apellido: 'Sierra',
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
/*Debido a que asignamos el nombre de la propiedad del objeto a 
una variable tenemos acceso a esa propiedad por medio de la variable*/
myKey = 'keypress';
console.log(obj[myKey]());
myKey = 'mouseOver';
console.log(obj[myKey]());
/*Debido a que usamos el nombre de la funcion asignada a una 
variable tenemos acceso a ella por medio de la variable*/

//Arrays en Javascript
let myArray = [];
 
myArray.push(4);
myArray.push('una cadena');
myArray.push(obj);
myArray.push(function () {
   console.log("hola desde el array");
});
console.log(myArray);
/*Creamos y agregamos contenido de diferentes tipos a un array,
al imprimirlo nos muestra todos los contenidos almacenados*/

myArray[2]['mouseOver']();
/*Invocamos a la funcion "mouseOver" que se encuentra en la 
segunda posicion del array*/

myArray[3]();
/*Invocamos la funcion anonima que se encuentra en la tercer
posicion del array*/

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

funcArray.forEach(item => {
    item();
});
/*Por medio del forEach se recorre todo el array (todos los 
elementos), pero al ser funciones todas se invocan*/