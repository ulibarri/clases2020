let obj = {
    nombre: 'Ana',
    edad: 20,
    apellido: 'Landin',
    keypress: function () {
        console.log('Has presionado una tecla')
    },
    mouseOver: function () {
        console.log('El puntero del mouse está arriba')
    }
}
// Aquí se muestran dos veces nombre
console.log(obj.nombre)
console.log(obj['nombre'])

// En esta variable se almacena nombre y despues la muestra con consolelog
let myKey = 'nombre'
console.log(obj[myKey])

// Aquí se crean 2 funciones, para despues reemplazarlas en la variable myKey, 
// al ejecutarlo logra mostrar los contenidos de cada funcion.
myKey = 'keypress'
console.log(obj[myKey]())
myKey = 'mouseOver'
console.log(obj[myKey]())

// Creamos un array
let array = []

// Con push, agregamos elementos diferentes al array
array.push(4)
array.push('string')
array.push(obj)
array.push(function(){
    console.log('hello world')
})

// El array imprime su contenido en la consola
console.log(array)

// Muestra la posicion 3 del array
console.log(array[3])

// Se crea un array nuevo
let fArray = []

// Procedemos a agregarle funciones
fArray.push (() => {
    console.log('function 1')
})
fArray.push(() => {
    console.log('function 2')
})
fArray.push(() => {
    console.log('function 3')
})

// Se crea un ciclo para mostrar los elementos del array.
fArray.forEach((item) => {
    item()
})