let obj = {
    nombre: 'Alfredo',
    edad: 19,
    apellido: 'Sánchez',
    keypress: function () {
        console.log('Se ha presionado una tecla')
    },
    mouseOver: function () {
        console.log('El puntero del mouse esta arriba')
    }
}

console.log(obj.nombre)
console.log(obj['nombre'])
/* El console.log manda a llamar la propiedad nombre de la variable objeto, 
por lo que se imprime el nombre 2 veces. */

let myKey = 'nombre'
console.log(obj[myKey])
/* Se declaro a la variable myKey como la propiedad nombre, por lo que 
cuando el console.log busca la propiedad myKey de la variable obj está buscando el nombre tal cual. */

myKey = 'keypress';
console.log(obj[myKey]())
myKey = 'mouseOver';
console.log(obj[myKey]())

/* El console.log manda a llamar la propiedad myKey, entonces primero llama la 
propiedad nombre y despues a las demas funciones respectivamente */

let myArray = [];
myArray.push(4);
myArray.push('una cadena');
myArray.push(obj);
myArray.push( function (){
    console.log("hola desde el array");
 })
 
console.log(myArray);
/* Se imprime lo que se agrego al array */

console.log(myArray[2].mouseOver())
/* Se imprime la función mouseOver que se encuentra en la posición 2 del Array*/

console.log(myArray[3]())
/* Imprime la función que se encuentra en la posición 3 del Array */

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

