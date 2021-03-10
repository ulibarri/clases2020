let persona = {
    nombre: "Luis",
    apellido: "Solis",
    getName: function () {
        return `Nombre: ${this.nombre} ${this.apellido},`
    },
    domicilio:  {
        calle: "Rosa Morada #7",
        colonia: "Arboledas",
        CP: 28869,
        municipio: "Manzanillo",
        getDir: function() {
            return `calle: ${this.calle}, Colonia: ${this.colonia}, CP: ${this.CP}, Municipio: ${this.municipio}`
        }
    }
}
console.log(persona.getName(),persona.domicilio.getDir());