let persona = {
    nombre: 'Edgar',
    apellido: 'Gonzalez',
    getName: function () {
        return `${this.nombre} ${this.apellido}`
    },
    domicilio: {
        calle: 'Marciano Cabrera #321',
        colonia: 'Tepeyac',
        cp: 28110,
        municipio: 'Tecoman'
    },
    getAddress: function () {
        return `${this.domicilio.calle} Colonia: ${this.domicilio.colonia}, CP: ${this.domicilio.cp}, ${this.domicilio.municipio}`
    }
}
console.log(persona.getAddress())
