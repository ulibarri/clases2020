const greet = () => console.log('Hello');
greet(); // ? invoke

const logGreeting = (fn) => fn();
logGreeting(() => console.log('Hello from a function created on the fly'));

const greetMe = () => console.log('Hello from the function expression');
greetMe();

logGreeting(greetMe);

const logGreeting1 = (nombre, color) =>
  console.log(
    `Hola ${nombre} buenos días! 
    Tu color favorito es el ${color}`
  );

logGreeting1('Ulises', 'Morado');
