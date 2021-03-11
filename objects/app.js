let persona = {
    nombre: "Josue",
    apellido: "Iglesias",
    getName: function () {
        return `${this.nombre} ${this.apellido}`
    },
    domicilio: {
        calle: "Candido Aguilar #444",
        colonia: "Loma Bonita",
        cp: 28000,
        municipio: "Villa de Álvarez"
    },
    getDomicilio: function() {
        return `Calle: ${this.domicilio.calle} Colonia: ${this.domicilio.colonia} CP: ${this.domicilio.cp} Municipio: ${this.domicilio.municipio} `
    }
}

console.log(persona.getDomicilio())