greet = () => console.log('Hello');
greet();

logGreeting = (fn) => fn();
logGreeting(greet);

let greetMe = () => console.log('Hello from the function expression');
greetMe();

logGreeting(greetMe);