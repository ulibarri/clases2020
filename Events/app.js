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
