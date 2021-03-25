// const Emitter = require('./emitter')
var Emitter = require('events')
var Config = require('./config')

let emtr = new Emitter()
emtr.on(Config.events.GREET, () => {
    console.log('somewhere, someone said hello')
})

emtr.on(Config.events.GREET, () => {
    console.log('A greeting ocurred!')
})

console.log(emtr) //Se imprime el emiter con el array "Events" con su contenido
emtr.emit('greet') //se ejecutan las funciones dentro del array events con el nombre "greet"

emtr.on(Config.events.JUMP, () => {
    console.log('someone jumped')
})

console.log(emtr) //Se imprime el emiter con el array "Events" con su contenido ahora tiene 2 arrays dentro: greet y jump
emtr.emit('jump') //se ejecutan las funciones dentro del array events con el nombre "jump"

/*
Emitter {
  events: {
    greet: [ [Function (anonymous)], [Function (anonymous)] ],
    jump: [ [Function (anonymous)] ]
  }
}
*/


//Cambio utilizando el “event emitter” propio de NODE JS
/*
 * Se imprime casi lo mismo pero se muestran más datos:

EventEmitter {
  _events: [Object: null prototype] {
    greet: [ [Function (anonymous)], [Function (anonymous)] ],
    jump: [Function (anonymous)]
  },
  _eventsCount: 2,
  _maxListeners: undefined,
  [Symbol(kCapture)]: false
}
*/


//Cambio utilizando el archivo config.js
/*
 * Se imprime con normalidad

EventEmitter {
  _events: [Object: null prototype] {
    greet: [ [Function (anonymous)], [Function (anonymous)] ],
    jump: [Function (anonymous)]
  },
  _eventsCount: 2,
  _maxListeners: undefined,
  [Symbol(kCapture)]: false
}
*/