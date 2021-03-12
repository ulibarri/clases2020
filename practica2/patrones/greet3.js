function Greetr() {
    this.greeting = "Hola desde un constructor";
    this.greet = function () {
        console.log(this.greeting);
    }
}
module.exports = new Greetr;