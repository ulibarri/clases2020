function greet(){
    console.log('Hello');
}

let logGreeting=(miParametro)=>  miParametro();

logGreeting(function(){
    console.log('Hello from a function created on the fly')
});

let logGreeting1=(miNombre,miColor)=>{
    console.log("Hola "+miNombre+" Buenos días! Tu color favorito es el "+miColor)
}
logGreeting1("Bastian","Azul")
/*let greetMe=function (){
    console.log('Hello from the funcion expression');
}
greetMe();
logGreeting(greetMe);*/
