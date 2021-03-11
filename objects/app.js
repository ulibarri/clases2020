let persona = {
    nombre: "Karla",
    apellido: "Sierra",
    getName: function () {
        return `${this.nombre} ${this.apellido}`
    },
    domicilio: {
        calle: "Dr. Miguel Galindo #709",
        colonia: "Villas de Oro",
        cp: 28985,
        municipio: "Villa de Alvarez",
        getAddress: function () {
        return `${this.calle}, Colonia: ${this.colonia}, CP: ${this.cp}, ${this.municipio}`
        }
    }
}
console.log(persona.getName());
console.log(persona.domicilio.getAddress());