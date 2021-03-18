let obj = {
    nombre: 'Martin',
    edad: 19,
    apellido: 'Mojica',
    keypress: function(){
        console.log('se ha presionado una tecla')
    },
    mouseOver: function(){
        console.log('el puntero del mouse está arriba')
    }
}


console.log(obj.nombre)
console.log(obj['nombre']) //Se manda a llamar a 'nombre' que contiene el valor o cadena 'Martin'

let myKey = 'nombre' //Se crea una variable llamada 'nombre'
console.log(obj[myKey]) //Se llama a myKey que contiene el que contiene el valor o cadena 'nombre', entonces se manda a llamar a 'Martin' tambien

myKey = 'keypress'
console.log(obj[myKey]()) //Se llama a myKey que contiene el que contiene el valor o cadena 'keypress', entonces se manda a llamar a la función de keypress
myKey = 'mouseOver'
console.log(obj[myKey]()) //Se llama a myKey que contiene el que contiene el valor o cadena 'mouseOver', entonces se manda a llamar a la función de mouseOver


let myArray = []
 
myArray.push(4)
myArray.push('una cadena')
myArray.push(obj)
myArray.push(function () {
   console.log("hola desde el array")
})
console.log(myArray) //Se imprime el contenido del array

let funcArray = []
 
funcArray.push(() => {
   console.log("Function 1")
})
 
funcArray.push(() => {
   console.log("Function 2")
})

funcArray.push(() => {
    console.log("Function 3")
})

funcArray.forEach((item) => { //se crea una iteración por cada item del array que imprime ese mismo item
    item()
})