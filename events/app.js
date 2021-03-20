let obj = {
    nombre: 'mario',
    edad: 20,
    apellido: 'Carvantes',
    keypress: function (){
        console.log('se ah presionado una tecla');
    },
    mouseOver: function (){
        console.log('El puntero del mouse esta arriba')
    }
}

console.log(obj.nombre);
console.log(obj['nombre']);

let mykey = 'nombre'
console.log(obj[mykey]);

mykey = 'nombre'
console.log(obj[mykey]);

mykey ='keypress';
console.log(obj[mykey]());
mykey = 'mouseOver';
console.log(obj[mykey]());


let myArray =[];

myArray.push(4);
myArray.push('una cadena');
myArray.push(obj);
myArray.push(function (){
    console.log('hola mundo desde el array')
})

console.log(myArray);
console.log(myArray[2].mouseOver)
console.log(myArray[3])


let funcArray = [];

funcArray.push(() =>{
    console.log('fucntion 1');
})

funcArray.push(() =>{
    console.log('function 2');
})

funcArray.push(() =>{
    console.log('function 3');
});

funcArray.forEach((item) =>{
    item();
})