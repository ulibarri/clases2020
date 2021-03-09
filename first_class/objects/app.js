let persona = {
    nombre: "Alfredo",
    apellido: "Sánchez",

    getName: function () {
        return `${this.nombre} ${this.apellido}`

    }
}

console.log(persona.getName())

