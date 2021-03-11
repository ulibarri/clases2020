// Módulo que expone un constructor

module.exports = function greet() {
    this.greeting = "Hello from the function constructor greet4";
    this.greet = function() {
        console.log(this.greeting);
    }
}