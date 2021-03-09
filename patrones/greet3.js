function Greetr(){
    this.greeting = 'Hello from the contructor'
    this.greet = function () {
        console.log(this.greeting)
    }
}

module.exports = new Greetr