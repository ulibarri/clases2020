let persona = {
    nombre:'Dylan',
    appellido: 'Villarreal',
    getName: function (){
        return `${this.number} ${this.appellido}` 
    },
    domicilio:{
        calle: 'tulipanes #33',
        colonia:'Bugambilias',
        cp: 28979,
        municipio: 'villade alvarez',
        getDirec:  function(){
            return `calle: ${this.calle}, colonia: ${this.colonia},  cp: ${this.cp}, ${this.municipio} `
        }
    }
}
console.log(persona)
console.log(persona.nombre)
console.log(persona.appellido)

console.log(persona.domicilio)