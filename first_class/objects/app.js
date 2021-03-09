let persona = {
    nombre: "Alfredo",
    apellido: "Sánchez",

    getName: function () {
        return `${this.nombre} ${this.apellido}`

    },
    
    domicilio: {
        calle: "Madero #144",
        colonia: "Centro",
        cp: 28000,
        municipio: "Colima",
    }
}

console.log(persona.domicilio)

