let Emitter = require('events') //Aquí al ejecutar el código muestra la funcion emitter más detallada
let config = require('./config') // Procedemos a inyectar la dependencia config
let emtr = new Emitter() 

emtr.on(config.events.GREET, () => {
    console.log('somewhere someone said hello')
})

emtr.on(config.events.GREET, () => {
    console.log('A greeting occurred')
})

console.log(emtr) // Aquí se muestran los eventos de la función emitter
emtr.emit('greet') // Ejecuta el evento greet 

emtr.on(config.events.JUMP, () => {
    console.log('Someone just jumped')
})

console.log(emtr) //Nos muestra los eventos de la funcion emitter
emtr.emit('jump') //Se ejecuta un evento jump de la funcion