const obj = {
  nombre: 'Ulises',
  apellido: 'Ramirez',
  edad: 20,
  keypress() {
    console.log('Se ha presionado una tecla');
  },
  mouseover() {
    console.log('El puntero del mouse está arriba');
  },
};

console.log(obj.nombre);
console.log(obj['nombre']);

let key = 'nombre';
console.log(obj[key]);

key = 'keypress';
obj[key]();
key = 'mouseover';
obj[key]();
// ! Explicacion:
// ? El objeto tiene propiedades que son funciones, llamadas keypress y mouseover
// ? Al obtenerlas con una key obtenermos la referencia a esa función y puede ser llamada

const nuevoArray = [];
nuevoArray.push(4);
nuevoArray.push('Una cadena');
nuevoArray.push(obj);
nuevoArray.push(() => {
  console.log('Hola desde el array');
});
console.log(nuevoArray);
// ! Explicacion: un array puede contener todo tipo de elementos
// ! estos se guardan por referencia

nuevoArray[2].mouseover();
// ! Explicacion: En la posicion 2 está guardada la referencia al objeto llamado obj
// ! Accedemos a esta posición con los corchetes y luego llamamos a la funcion mouseover

nuevoArray[3]();
// ! Explicacion: en la posicion 3 se encuentra la referencia a una funcion, al
// ! acceder a esta posicion con los corchetes nos devuelve una funcion que podemos ejecutar

const funcArray = [];
funcArray.push(() => {
  console.log('Funcion 1');
});
funcArray.push(() => {
  console.log('Funcion 2');
});
funcArray.push(() => {
  console.log('Funcion 3');
});
funcArray.forEach((f) => f());
// ! La funcion forEach de un array recive una funcion,
// ! recorre todos los elementos del arrya y se lo pasa como parametro a la funcion que recibió
// ! Como todos los elementos del array son funciones pueden ser llamadas
