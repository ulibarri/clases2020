module.exports = function Greetr() {
    this.gretting = "Hello from the constructor greet4";
    this.greet = function () {
        console.log(this.gretting);
    }
}