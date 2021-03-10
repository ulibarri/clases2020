let persona = {
    nombre: "Miguel",
    apellido: "Gonzalez",
    getName: function () {
        return `${this.nombre} ${this.apellido}`
    },
    domicilio: {
         calle: "Pablo Silva #565",
         colonia: "Los Olivos",
         cp: 28982,
         municipio: "Villa de Alvarez",
         getAdress: function() {
             return `${this.calle} Colonia: ${this.colonia} CP: ${this.cp}, ${this.municipio}`
         }
    }
};

console.log(persona.getName())
console.log(persona.domicilio.getAdress());