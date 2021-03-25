//requestAnimationFrame('./greet')
//greet();
let greet=require('./greet')
greet();

let persona={
    nombre:"Bastian",
    apellido:"Natael",
    getName:function(){
        return `${this.nombre} ${this.apellido}`
    },
    domicilio:{
        calle:"Madero #144",
        colonia:"Centro",
        cp:208000,
        municipio:"Colima",
        getDomicilio:function(){
            return `${this.calle} ${this.colonia} ${this.cp} ${this.municipio}`}
    }
}
console.log(persona.nombre)
console.log(persona.apellido)
console.log(persona.getName())
console.log(persona.domicilio)
console.log(persona.domicilio.getDomicilio())