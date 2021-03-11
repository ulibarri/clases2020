let persona = {
    nombre: 'Vanessa',
    apellido: 'Covarrubias',
    getName: function () {
        return `${this.nombre} ${this.apeliido}`
    },
    domicilio: {
        calle: "Madero #144",
        colonia: "Centro",
        cp: 28000,
        municipio: "Colima",

        getDomicilio: function () {
            return `${this.calle} ${this.colonia} ${this.cp} ${this.municipio}`
        }
    }
}

console.log(persona.getDomicilio())