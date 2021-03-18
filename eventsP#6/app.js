let obj = {
    nombre: "Carlos",
    edad: 44,
    apellido: "Ulibarri",
    keypress: function(){
        console.log("Se ha presionado una tecla");
    },
    mouseOver: function(){
        console.log("El puntero del mouse está arriba");
    }
};

console.log(obj.nombre);
console.log(obj['nombre']);

let myKey = 'nombre';
console.log(obj[myKey]);
//En la variable myKey se le asigna el valor de 'nombre', es decir, son equivalentes y en el
//console.log se busca el valor de myKey que es igual a 'nombre', una propiedad dentro del objeto

myKey = "keypress";
console.log(obj[myKey]());
myKey = 'mouseOver';
console.log(obj[myKey]());
//Se cambia el valor de "myKey" haciendo referencia a distintas propiedades del objeto

let myArray = [];

myArray.push(4);
myArray.push("Una cadena");
myArray.push(obj);
myArray.push(function(){
    console.log("Hola desde array");
});
console.log(myArray);
//Muestra todo lo que se agregó al array(función, número, objeto, texto)

console.log(myArray[2].mouseOver());
//Se manda a llamar a la función que está dentro del objeto que está dentro del array

console.log(myArray[3]());
//Muestra el contenido del console.log de la función del array

let funcArray = [];

funcArray.push(() => {
    console.log("Function1");
});

funcArray.push(() => {
    console.log("Function2");
});

funcArray.push(() => {
    console.log("Function3");
});

funcArray.forEach((item) => {
    item();
});
//Imprrime los contenidos de los console.log