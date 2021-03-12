module.exports = function greet4(){
    this.greeting = "Hello from de function constructor greet4";
    this.greet1 = function(){
        console.log(this.greeting);
    }
}