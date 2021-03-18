let persona = {
    nombre: 'Eduardo',
    apellido: 'Lopez',
    getName: function () {
        return `${this.nombre} ${this.apellido}`
    },
    domicilio: {
        calle: "Ricardo Alvarez #310",
        colonia: "Centro",
        cp: 208000,
        municipio: "Colima"
    },
    getDomicilio: function () {
        return `${this.domicilio.calle} Colonia: ${this.domicilio.colonia} CP: ${this.domicilio.cp},${this.domicilio.municipio}`
    }
}
console.log(persona.domicilio);
