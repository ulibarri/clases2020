let obj={
    nombre:'Bastian',
    edad:44,
    apellido:'Hernandez',
    keyPress:function(){
        console.log("Se ha presionado una tecla")
    },
    mouseOver: function(){
        console.log("El puntero del mouse está arriba")
    }
}
console.log(obj.nombre)
console.log(obj['nombre']);

let myKey='nombre'
console.log(obj[myKey]);

myKey='keypress';
console.log(obj[myKey]());
myKey='mouseOver';
console.log(obj[myKey]())

let myArray=[];
myArray.push(4);
myArray.push("Una cadena");
myArray.push(obj);
myArray.push(function (){
    console.log("Hola desde el array")
})
console.log(myArray)

let funcArray=[];
funcArray.push(()=>{
    console.log("Function 1");
});

funcArray.push(()=>{
    console.log("Function 2")
})

funcArray.push(()=>{
    console.log("Function 3")
})

funcArray.forEach((item)=>{
    item();
})