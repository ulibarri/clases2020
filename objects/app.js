let persona = {
    nombre:'Dylan',
    appellido: 'Villarreal',
    getName: function (){
        return `${this.number} ${this.appellido}` 
    },
    domicilio:{
        calle: 'tulipanes #33',
        centro:'Bugambilias',
        cp: 28979,
        municipio: 'villade alvarez'
    }
}
console.log(persona)
console.log(persona.nombre)
console.log(persona.appellido)

console.log(persona.domicilio)