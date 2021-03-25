let obj = {
    nombre: 'Vanessa',
    edad: 20,
    apellido:'Covarrubias',
    keypress: function() {
        console.log('Se ha presionado una tecla')
    },
    mouseOver: function() {
        console.log('El puntero del mouse está arriba')
    }
}
// Muestra nombre dos veces
console.log(obj.nombre)
console.log(obj['nombre']) 

//almacena nombre para despues mostrarla
let mykey = 'nombre'
console.log(obj[mykey])


//muestra los contenidos de cada funcion
mykey = 'keypress'
console.log(obj[mykey]())

mykey = 'mouseOver'
console.log(obj[mykey]())

// 
let myArray = [] 
myArray.push(4)
myArray.push('una cadena')
myArray.push(obj)
myArray.push(function () {
    console.log("Hola desde el array")
})

//imprime su contenido
console.log(myArray)


//Ahora agrega una línea, para invocar a la función mouseOver que se encuentra en el objeto obj, alojado en la posición 2 del array.
console.log(myArray[3])

let funcArray = [] 
funcArray.push( () => {
    console.log("function 1")
})

funcArray.push( () => {
    console.log("Function2")
})

funcArray.push( () => {
    console.log("Function3")
})

funcArray.forEach((item) => {
    item()
})

//Muestra los elementos del array mediante un ciclo