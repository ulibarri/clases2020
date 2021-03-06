//Function expression created on the fly
let logGreeting = (miParametro) => miParametro();
logGreeting(function (){
    console.log('Hola desde la Function expression created on the fly')
})

//Interpolación de strings "clasica"
let logGreeting1 = (miNombre, miColor) => {
    console.log('Hola ' + miNombre + ' buenos dias! Tu color favorito es el ' + miColor);
}
logGreeting1('Ximena', 'azul pastel');