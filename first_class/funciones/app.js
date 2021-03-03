const greet = () => console.log('Hello');
greet(); // ? invoke

const logGreeting = (fn) => fn();
logGreeting(greet);

const greetMe = () => console.log('Hello from the function expression');
greetMe();

logGreeting(greetMe);
