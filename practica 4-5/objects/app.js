let persona = {
    nombre: "carlos",
    apellido: "ulibarri",
    getName: function() {
        return `${this.nombre} ${this.apellido}`
    },
    domicilio: {
        calle: "madero #144",
        colonia: "centro",
        cp: 28000,
        municipio: "colima"
    },
    getDomicilio: function () {
        return `${this.domicilio.calle} Colonia: ${this.domicilio.colonia} CP: ${this.domicilio.cp},${this.domicilio.municipio}`       
    }
};

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.getName());
console.log(persona.domicilio);
console.log(persona.getDomicilio());