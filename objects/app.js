let persona = {
    nombre: "Iván",
    apellido: "Medrano",
    getName: function() {
        return `${this.nombre} ${this.apellido}`
    },
    domicilio: {
        calle: "Roberto Gaytan A. #264",
        colonia: "Juan Jose Rios II",
        cp: 28984,
        municipio: "Villa de Alvarez",
    },
    getAddress: function() {
        return `${this.domicilio.calle} Colonia: ${this.domicilio.colonia} CP: ${this.domicilio.cp},${this.domicilio.municipio}`
    }
}
console.log(persona.getAddress());