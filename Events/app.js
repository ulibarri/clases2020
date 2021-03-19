/*
let obj ={
    nombre: "dylan",
    edad: 20,
    apellido:"villarreal"
}
console.log(obj.nombre)
console.log(obj['nombre'])


console.log(obj[myKey])
//el nombre se vulve a mostrar
*/
let myKey = 'nombre'
let obj ={
    nombre: "dylan",
    edad: 20,
    apellido:"villarreal",
    keypress: function(){
        console.log('se ah precionado una tecla')
    },
    mouseOver: function() {
        console.log('el puntero del mouse esta arriba')
    }
}
myKey='keypress'
console.log(obj[myKey]())
myKey= 'mouseOver'
console.log(obj[myKey]())
let myArray =[];
myArray.push(4)
myArray.push('una cadena')
myArray.push(obj)
myArray.push(function(){
    console.log('hola desde la funcion')
})
console.log(myArray)
//Se guardaron variables de diferente tipo desde objetos hasta funciones
myArray[2]['mouseOver']()
//incocamos la funcion mouseover
myArray[3]()
//imprimer lo que esta adentro de la funcion
let funArray = []
funArray.push(()=>{
    console.log('funcion numero uno')
})
funArray.push(()=>{
    console.log('funcion numero dos')
})
funArray.push(()=>{
    console.log('funcion numero tres')
})
funArray.forEach((item)=>{
    item();
})
