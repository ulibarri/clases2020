function Greetr(){
    this.greeting = 'hello from the function constructo';
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = new Greetr;