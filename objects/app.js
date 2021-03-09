let obj = {};

let persona = {
    nombre: "Jonathan",
    apellido: "Rodriguez",
    getName: function(){
        return `${this.nombre} ${this.apellido}`
    },
    domicilio: {
        calle: "Madero #144",
        colonia: "Centro",
        cp: 28000,
        municipio: "Colima",
        getDireccion: function(){
            return `${this.calle} Colinia: ${this.colonia} CP: ${this.cp}, ${this.municipio}`
        }
    }
}
//console.log(persona);
//console.log(persona.nombre);
//console.log(persona.apellido);
//console.log(persona.getName());
//console.log(persona.domicilio);
console.log(persona.domicilio.getDireccion()); 