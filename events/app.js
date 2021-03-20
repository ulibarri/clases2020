let obj = {
    nombre: 'Edgar',
    edad: 20,
    apellido: 'Gonzalez',
}
// Muestra dos veces nombre
console.log(obj.nombre)
console.log(obj['nombre'])

// En la variable se almacena nombre para despues mostrarla con consolelog
let myKey = 'nombre'
console.log(obj[myKey])
