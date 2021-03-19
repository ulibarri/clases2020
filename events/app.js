/*
let obj = {
    nombre: "Luis",
    edad: 21,
    apellido: "Solis"
}
console.log(obj.nombre);
console.log(obj["nombre"]);
let myKey = "nombre"
console.log(obj[myKey]);
*/

// 1.-Se imprime 3 veces mi nombre 

let obj = {
    nombre: "Luis",
    edad: 21,
    apellido:"Solis",
    keypress: function (){
        console.log("Se ha presionado una tecla");
    },
    mouseOver: function (){
        console.log("El puntero del mouse esta arriba");
    }
}

console.log(obj.nombre);
console.log(obj["nombre"]);

let myKey = "nombre"
console.log(obj[myKey]);

myKey = "keypress";
console.log(obj[myKey]());
myKey = "mouseOver";
console.log(obj[myKey]());

//¿Qué sucede?

let myArray = [];

myArray.push(4);
myArray.push("una cadena");
myArray.push(obj);
myArray.push(function (){
    console.log("hola desde el array");
})
console.log(myArray);
console.log(myArray[2][myKey]());
console.log(myArray[3]());
// se imprime, pero donde se encuentran los function no se imprimen correctamente
// Despues de invocar la función  mouseOver se llamó al objeto de posición y se imprimió
//se invoca a la función que está en la posición 3

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

funcArray.forEach((item) => {
    item();
});

// se imprime en orden las funciones