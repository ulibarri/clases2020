module.exports = function Greetr() {
    this.greeting = 'hello from greet4'
    this.greet = function () {
        console.log(this.greeting)
    }
}