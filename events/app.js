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

// Creamos un array
let array = []

// Con la funcion push, agregamos elementos al array de diferente tipo
array.push(4)
array.push('rtx')
array.push(obj)
array.push(function(){
    console.log('alo polisia')
})

// Al mostrar el array en la consola, nos imprime su contenido
console.log(array)

// Mostramos la posicion 3 del array
console.log(array[3])

// Se crea un array
let fArray = []

// Le agregamos funciones
fArray.push (() => {
    console.log('function 1')
})
fArray.push(() => {
    console.log('function 2')
})
fArray.push(() => {
    console.log('function 3')
})

// Crea un pequeño ciclo para mostrar cada elemento del array
fArray.forEach((item) => {
    item()
})