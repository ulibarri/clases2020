function Greetr() {
    this.greeting = " Buenas desde la function constructor";
    this.greet = function () {
        console.log(this.greeting)
    }
}
module.exports = new Greetr;