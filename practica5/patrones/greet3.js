function greet3(){
    this.greeting = "Hello from de function constructor";
    this.greet1 = function(){
        console.log(this.greeting);
    }
}

module.exports = new greet3;