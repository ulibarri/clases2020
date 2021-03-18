let obj = {
    nombre: "Carlos",
    edad: 44,
    apellido: "Ulibarri",
    keyPress: function (){
        console.log("Se ha presionado una tecla");
    },
    mouseOver: function(){
        console.log("El puntero del mouse esta arriba");
    }
}

console.log(obj.nombre);
console.log(obj["nombre"]);

let myKey = "nombre";

console.log(obj[myKey]);

myKey = "keyPress";
console.log(obj[myKey]());
myKey = "mouseOver";
console.log(obj[myKey]());
/*Al poner el atributo keyPress o mouseOver en la variable myKey y poner los () manda a llamar la funcion
regresando el console.log*/

let myArray = [];

myArray.push(4);
myArray.push("Una cadena");
myArray.push(obj);
myArray.push(function (){
    console.log("Hola desde el array");
})
console.log(myArray);
/*El array al poder contener diferentes tipos de valores contiene todo lo que se le ha 
introducido, como es la funcion, el objeto, la cadena y el numero*/
myArray[2].mouseOver();
/*Se accede a esa posicion del array que es donde se encuentra al objeto y se llama a
la funcion mouseOver que es un atributo del objeto*/

let funcArray = [];

funcArray.push(() => {
    console.log("Function 1");
});

funcArray.push(() => {
    console.log("Function 2");
});

funcArray.push(() => {
    console.log("Function 3");
});

funcArray.forEach((item) =>{
    item();
});
/*Con el foreach se llaman todas las funciones que tiene el array y cada funcion realiza lo que tiene
en este caso un console.log */