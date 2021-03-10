let persona = {
    nombre: "Carlos",
    apellido: "Ulibarri",
    getName: function () {
        return `${this.nombre} ${this.apellido}`
    },
    domicilio: {
        calle: "Madero #144",
        colonia: "Centro",
        cp: 28000,
        municipio: "Colima",
        getDirec:  function(){
            return `calle: ${this.calle}, colonia: ${this.colonia},  cp: ${this.cp}, ${this.municipio}`
        }
    }
}
console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.domicilio);
