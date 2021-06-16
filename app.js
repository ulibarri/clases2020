function greet(){
    console.log('hello');
}
greet();

function logreeting(fn){
    fn();
};
logreeting(greet);

let greetme = function() 
{console.log('hello from the function');
} 
greetme();

///expresar funcionees
let mifuncion = () => {

}

let saludo = (nombre, tratamiento) => {
    console.log('hola ' + tratamiento + 'cancer' + nombre)
}
saludo('miguel', 'juarez')




let cuadrado1 = numero => {
    return numero * numero;
}
var cuadrado = function(numero) {
    return numero * numero;
}
console.log(cuadrado1(9));

let cuadrado2 = numero => {
    return numero * numero;
}
console.log(cuadrado2(8));

let cuadrado3 = numero => numero * numero;
console.log(cuadrado3(7));