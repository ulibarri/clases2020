module.exports = function Greetr(){
    this.greeting = "Hello from tue function constructor greet 4"
    this.greet = function () {
        console.log(this.greeting)
    }
}