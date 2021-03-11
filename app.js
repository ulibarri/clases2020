let persona = {
    nombre: "Mario",
    apellidos: "Carvantes",
    getName: function(){
        return `${this.nombre} ${this.apellidos}`
    },

    domicilio:{
        calle: "Ejemplo #152",
        colonia: "real centenario",
        cp: 28984,
        municipio: "Villa de Alvarez",
        getDom: function(){
            return `${this.calle} ${this.colonia} ${this.cp} ${this.municipio}`
        }
    }
    
}

console.log(persona);
console.log(persona.getName());
console.log(persona.nombre);
console.log(persona.apellidos); 
console.log(persona.domicilio);
console.log(persona.domicilio.getDom());

