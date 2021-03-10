let greet = require('./greet.js')
greet();

let persona = {
    nombre: "Luis",
    apellido: "Leyva",
    getName: function () {
        return `${this.nombre} ${this.apellido}`
    },
    domicilio: {
        calle: "Krakatoa #233",
        colonia: "Bugambilias",
        cp: 28000,
        municipio: "Colima",
        getDom: function () {
            return `${this.calle} ${this.colonia} ${this.cp} ${this.municipio}`
        }
    }
}
console.log(persona);
console.log(persona.nombre); 
console.log(persona.apellido);
console.log(persona.getName());
console.log(persona.domicilio.getDom());