/* let obj = {
    nombre: "Ximena",
    edad: 20,
    apellido: "Velasco"
}

console.log(obj.nombre);
console.log(obj['nombre']);

let myKey = 'nombre'
console.log(obj[myKey]);

//Se vuelve a impimir el nombre */ 

let obj = {
    nombre: 'Ximena',
    edad: 20,
    apellido: 'Velasco',
    keypress: function (){
        console.log('Se ha presionado una tecla');
    },
    mouseOver: function(){
        console.log('El puntero del mouse esta  arriba');
    }
}


let myKey = 'nombre'

myKey = 'keypress';
console.log(obj[myKey]());
myKey = 'mouseOver';
console.log(obj[myKey]());

// Aqui tengo que cmentar 

let myArray = [];

myArray.push(4);
myArray.push('una cadena');
myArray.push(obj);
myArray.push(function(){
    console.log("Hola desde Array")
})


console.log(myArray);
//Se guardaron objetos de diferete tipo como numeros, objetos y texto

myArray[2]['mouseOver']()
//Se invoca la funcion mouseOver


myArray[3]();

//Imprime 'Hola desde Array' 

let funcArray = [];

funcArray.push( () => {
    console.log("Function 1");
});

funcArray.push(()=>{
    console.log("Function 2");
});

funcArray.push(()=>{
    console.log("Function 3");
});

funcArray.forEach((item) => {
    item();
})

//Imprime todas las funciones 
