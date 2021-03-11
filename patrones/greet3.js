function Greetr() {
    this.greeting = "Hello from function constructor"
    this.greet = function() {
        console.log(this.greeting)
    }
}

module.exports = new Greetr