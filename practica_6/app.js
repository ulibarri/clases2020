let obj = {
  nombre: 'Alberto Roman',
  apellidos: 'Herrera Espinoza',
  edad: 20,
  mouseOver: function () {
      console.log(`hola desde mouseOver`);
  },
  keyPress: function () {
      console.log(`hola desde keyPress`);
  }
}

console.log(obj);
console.log(`Tu nombre es: ${obj.nombre} ${obj.apellidos}`);
console.log(`Tu nombre es: ${obj['nombre']} ${obj['apellidos']}`);

let mykey = 'nombre';

console.log(`Tu nombre es: ${obj[mykey]}`) //Acceso a key por una variable
mykey = `apellidos`;
console.log(`Tu nombre es: ${obj[mykey]}`) //Acceso a key por una variable
mykey = `mouseOver`;
obj[mykey]();
mykey = `keyPress`;
obj[mykey]();
let myArray = [];
myArray.push(4);
myArray.push('Hola desde array');
myArray.push(obj);
myArray.push(() => { return console.log('Hola desde function del array'); });
console.log(myArray);
console.log(myArray[2].nombre);
myArray[2].keyPress();
myArray[3]();

let funcArray = [];

funcArray.push(() => { console.log(`Hola desde la funcion 1`) });
funcArray.push(() => { console.log(`Hola desde la funcion 2`) });
funcArray.push(() => { console.log(`Hola desde la funcion 3`) });
funcArray.push(() => { console.log(`Hola desde la funcion 4`) });

funcArray.forEach((item) => { 
  item();
});
