let persona = {
    nombre: "Gabino",
    apellidos: "Morales",

    getName: function(){
        return `${this.nombre} ${this.apellidos}`
    },

    domicilio:{
        calle: "Benito Juarez #362",
        colonia: "Juan Jose Rios 3",
        cp: 28984,
        municipio: "Colima"
    },

    getDress: function(){
        return `${this.domicilio.calle} Colonia: ${this.domicilio.colonia} CP: ${this.domicilio.cp}, ${this.domicilio.municipio}`
    }
};

console.log(persona.getDress())