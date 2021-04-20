// Modulo que espone un contructor
class Greetr {
  constructor() {
    this.greeting = 'Hello from the function constructor';
    this.greet = this.greet.bind(this);
  }
  greet() {
    console.log(this.greeting);
  }
}
module.exports = Greetr;
