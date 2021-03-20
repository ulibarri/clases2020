let obj = {
    nombre: 'Edgar',
    edad: 20,
    apellido: 'Gonzalez',
    keypress: function () {
        console.log('Se ha presionado una tecla')
    },
    mouseOver: function () {
        console.log('el puntero del mouse esta arriba')
    }
}
// Muestra dos veces nombre
console.log(obj.nombre)
console.log(obj['nombre'])

// En la variable se almacena nombre para despues mostrarla con consolelog
let myKey = 'nombre'
console.log(obj[myKey])

// Se crearon 2 funciones y se reemplazan en la variable myKey, al ejecutarlo muestra los contenidos de cada funcion
myKey = 'keypress'
console.log(obj[myKey]())
myKey = 'mouseOver'
console.log(obj[myKey]())