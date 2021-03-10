let greet = require('./greet.js');
greet();

let persona = {
    nombre: "Jesús Iván",
    apellidos: "Godínez Martínez",
    getName: function() {
        return `${this.nombre} ${this.apellidos}`;
    },
    domicilio: {
        calle: "Selvas #2112",
        colonia: "Milenio",
        cp: "28000",
        municipio: "Colima",
        getAddress: function() {
            return `${this.calle} Colonia: ${this.colonia} CP: ${this.cp}, ${this.municipio}`
        } // Puede incluirse directamente en domicilio o bien en persona, lo pongo aquí para que se vea mas ordenado y especifico
    }
}
console.log(persona); // regresa el objecto completo
console.log(persona.nombre); // regresa el nombre
console.log(persona.apellidos); // regresa los apellidos
console.log(persona.getName()); // ejecutar el getName
console.log(persona.domicilio); // regresa el objecto del domicilio
console.log(persona.domicilio.getAddress()); // regresa el domicilio