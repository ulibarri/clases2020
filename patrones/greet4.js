module.exports = function Greetr() {
    this.greeting = "Hello from de function contructor greet4";
    this.greet = function () {
        console.log(this.greeting);
        
    }
}
    