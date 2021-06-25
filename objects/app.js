let persona = {
    nombre: 'Juan',
    apellido: 'Michel',
    getName: function() {
        return `${this.nombre} ${this.apellido}`
    },
    domicilio: {
        calle: 'Madero #144',
        colonia: 'Centro',
        cp: 28000,
        municipio: 'Colima',
        getDomicilio: function() {
            return `${this.calle} Colonia: ${this.colonia} CP: ${this.cp}, ${this.municipio}`
        }
    }
};

// console.log(persona.nombre);
// console.log(persona.apellido);
// console.log(persona.getName());
// console.log(persona.domicilio);
console.log(persona.domicilio.getDomicilio());