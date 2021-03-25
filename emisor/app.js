let Emitter = require('events') //Con este cambio al ejecutar el codigo muestra la funcion emitter pero con mas detalle

let emtr = new Emitter() //Se genera la instancia

emtr.on('greet', () => {
    console.log('somewhere someone said hello')
})

emtr.on('greet', () => {
    console.log('A greeting occurred')
})

console.log(emtr) //Nos muestra los eventos de la funcion emitter
emtr.emit('greet') //Se ejecuta un evento greet de la funcion

emtr.on('jump', () => {
    console.log('someone just jumped')
})

console.log(emtr) //Nos muestra los eventos de la funcion emitter
emtr.emit('jump') //Se ejecuta un evento jump de la funcion