module.exports = function Greetr () {
    this.greeting= 'Hello from the function constructor';
    this.greet = function () {
        console.log(this.greeting);
    }
}