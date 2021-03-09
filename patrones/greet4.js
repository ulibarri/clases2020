module.exports = function Greetr(){
    this.greeting = 'hellow from function constructor greet 4'
    this.greet = function(){
        console.log(this.greeting)
    }
}