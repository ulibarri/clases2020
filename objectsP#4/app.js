let persona = {
    nombre: "Carlos",
    apellido: "Ulibarri",
    getName: function (){
        return `${this.nombre} ${this.apellido}`
    },
    domicilio: {
        calle: "Madero #144",
        colonia: "Centro",
        cp: 28000,
        municipio: "Colima",
    },
    getDom: function (){
        return `${this.domicilio.calle}, Colonia: ${this.domicilio.colonia}, CP: ${this.domicilio.cp}, ${this.domicilio.municipio}`
    }
};

console.log(persona.getDom());

/*
console.log(persona.domicilio);
console.log(persona.getName());
console.log(persona.nombre);
console.log(persona.apellido);
*/