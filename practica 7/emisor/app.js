let Emitter = require('events') //Cambio
let config = require('./config') //Inyecto la dependencia

let emtr = new Emitter() // Generación de la instancia

emtr.on(config.events.GREET, () => {
    console.log('somewhere someone said hello')
})

emtr.on(config.events.GREET, () => {
    console.log('A greeting occurred')
})

console.log(emtr) //Muetsra los eventos
emtr.emit('greet') //Se ejecuta un evento greet de la función

emtr.on(config.events.JUMP, () => {
    console.log('someone just jumped')
})

console.log(emtr) //Muestra eventos de la funcion emitter
emtr.emit('jump') //Ejecuta un evento jump de la función