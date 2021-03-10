let persona = {
    nombre: "Edson",
    apellido: "Rodríguez",
    getName: function () {
        return `${this.nombre} ${this.apellido}`
    },
    domicilio: {
        calle: "Paseo de Azaleaz #246",
        colonia: "Jardines de Bugambilias",
        cp: 28978,
        municipio: "Villa de Álvarez",
        getDirec:  function(){
            return `Calle: ${this.calle}, Colonia: ${this.colonia},  CP: ${this.cp}, ${this.municipio}`
        }
    }
}
console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.domicilio);