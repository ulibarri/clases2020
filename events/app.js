let obj = {
    nombre: 'Ivan',
    edad: 25,
    apellido: 'Medrano',
    keypress: function() {
        console.log('Se ha presionado una tecla');
    },
    mouseOver: function() {
        console.log('El puntero del mouse esta arriba');
    }
}

console.log(obj.nombre);
console.log(obj['nombre']);

//En esta parte le damos a la variable 'myKey' el valor de un campo de nuestro objeto que al ser
//referenciado en el console.log nos da el mismo resultado como en 'console.log(obj['nombre']);'
let myKey = 'nombre'
console.log(obj[myKey]);

//Aqui le redefinimos el valor de 'myKey' dandole el nombre de una función que existe en nuestro objeto
//y usamos 'console.log' para demostrarlo solo que ahora se usa un parentesis afuera de '[]' para referenciar que
//es una función
myKey = 'keypress';
console.log(obj[myKey]());
myKey = 'mouseOver';
console.log(obj[myKey]());

//---------------------------------------------------------------------------------------------------------------

//Lo que pasa aqui es que creamos un array y agregamos contenido de diferentes tipos de valores como numerico, string
//un obeto y una función y al imprimir el contenido del array nos muestra todo lo que metimos a nuestro array
let myArray = [];

myArray.push(4);
myArray.push('una cadena');
myArray.push(obj);
myArray.push(function () {
    console.log("Hola desde el array")
});

console.log(myArray);

//Invocamos la función 'mouseOver' imprimiendo el array y seleccionando el objeto donde se 
//encuentra nuestra función que es 'myArray[2]', después de eso seleccionamos la función dentro como 'mouseOver()'
//y nos imprimira el resultado de esa función que se creo
myArray[2].mouseOver()

//Aqui invocamos directamente la función sin necesidad de un nombre porque es anonima, solo usamos los parentesis
//para decir que es una función y se ejecuta automaticamente
myArray[3]()

let funcArray = [];

funcArray.push( () => {
    console.log("Function 1");
});

funcArray.push( () => {
    console.log("Function 2");
});

funcArray.push( () => {
    console.log("Function 3");
});

//La función forEach llama a un item del array por cada item que tiene, aqui se ingresa el valor del item,
//y se ejecuta item() porque son funciones.
funcArray.forEach((item) => {
    item();
});

