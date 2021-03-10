module.exports = function Greetr() {
    this.greeting = " Buenas desde la function constructor greet4";
    this.greet = function () {
        console.log(this.greeting)
    }
}
