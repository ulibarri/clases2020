let obj = {
    nombre: "Carlos",
    edad: 44,
    apellido: "Ulibarri",
    keyPress: function() {
        console.log('Se ha presionado una tecla')
    },
    mouseOver: function() {
        console.log('El puntero del mouse esta arriba')
    }
}

console.log(obj.nombre);
console.log(obj['nombre']);


let myKey = 'nombre';
console.log(obj[myKey]);
//Explicacion: Podemos acceder a las propiedades de un objeto usando corchetes(es una alternativa a usar punto), en este caso relaciona mos el valor de la variable 'myKey' con el nombre de la propiedad. Esto se suele usar normalmente para tener un codigo mas dinamico.

myKey = 'keyPress';
obj[myKey]();
myKey = 'mouseOver';
obj[myKey]();
//Explicacion: Podemos acceder a las propiedades de un objeto usando corchetes(es una alternativa a usar punto), en este caso relaciona mos el valor de la variable 'myKey' con el nombre de la propiedad. Como la propiedad es una funcion es necesario indicarle esto.



let myArray = [];

myArray.push(4);
myArray.push('una Cadena');
myArray.push(obj);
myArray.push(function() {
    console.log("hola desde el array")
})

console.log(myArray);
//Explicacion: JS te permite crear arrays que a diferencia de otros lenguajes, estos pueden tener diferentes tipos de datos. En el ejemplo agregamos un numero, un string, un objeto y una funcion.

myArray[2]['mouseOver']();
//Explicacion: Con el primer corchete indicamos que deseamos acceder al tercer elemento del array, con el segundo corchete indicamos que queremos acceder a la propiedad llamada "mouseOver" que pertenece al 3er elemento del array, pero como esta propiedad es una funcion debemos indicarle como tal que lo ejecute como una funcion.


myArray[3]();
//Explicacion: Accedemos al elemento que esta en la 3er posicion del array, pero como este es una funcion debemos ejecutarlo como tal.


let funcArray = [];

funcArray.push(() => {
    console.log('function 1');
});

funcArray.push(() => {
    console.log('function 2');
});


funcArray.push(() => {
    console.log('Function 3')
})


funcArray.forEach(item => {
    item();
});
//Explicacion: El forEach lo que hace es recorrer cada elemento del array, pero como son funciones debemos ejecutarlas como tal.



