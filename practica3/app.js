let logGreeting = (parametro) => parametro()
logGreeting(function () {
    console.log('hello from a function created on the fly')
})

//interpolacion de strings
let logGreeting1 = (miNombre, miColor) => {
    console.log(`hola ${miNombre} tu color es ${miColor}`)
}
logGreeting1('edgar', 'rojo')