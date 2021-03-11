function Greetr() {
    this.greeting = 'hello from the constructor'
    this.greet = function () {
        console.log(this.greeting)
    }
}
module.exports = new Greetr