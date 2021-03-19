let obj = {
    nombre: 'carlos',
    edad: '44',
    apellido: 'ulibarri',
    keypress: function(){
        console.log('se ha presionado una tecla');
    },
    mouseOver: function(){
        console.log('el puntero del mouse esta arriba');
    }
}

console.log(obj.nombre);
console.log(obj['nombre']);

//regresa error al realizar console.log(obj[mykey])
let myKey = 'nombre';
// console.log(obj[mykey]);


//imprime el console log que esta dentro de las funcion del objeto obj y imprime undefined en los console log de abajo
//esto porque esta imprimiendo una funcion que no retorna un valor
mykey = 'keypress';
console.log(obj[mykey]());
mykey = 'mouseOver';
console.log(obj[mykey]());

/**
 * se dclaro un array vacio y se le agrego diferentes tipos de datos con la funcion push
 */
let array = [];
array.push(4);
array.push('una cadena');
array.push(obj);
array.push(function () {
    console.log('hola desde el array');
});
console.log(array);
//accede a la funcion mouse over que se encuentra en el elemento en la posicion 2
console.log(array[2]['mouseOver']);
//imprime el console log que esta dentro de las funcion del array en la pos 3 y imprime undefined en los console log de abajo
//esto porque esta imprimiendo una funcion que no retorna un valor
console.log(array[3]());

let funcArray = [];
funcArray.push(()=>console.log('funcion 1'))
funcArray.push(()=>console.log('funcion 2'))
funcArray.push(()=>console.log('funcion 2'))

//por cada elemento funcArray imprime el contenido dentro de la funcion
funcArray.forEach(i => {
    i();
});