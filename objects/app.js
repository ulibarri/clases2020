let persona = {
    nombre: 'Martin',
    apellido: 'Mojica',
    getName: function(){
        return `${this.nombre} ${this.apellido}`
    },
    domicilio:{
        calle:'Emiliano Zapata #1',
        colonia: 'Colima',
        cp: 28620,
        municipio: 'Colima'
    },
    getDomicilio: function(){
        return `${this.domicilio.calle} Colonia: ${this.domicilio.colonia} CP: ${this.domicilio.cp}, ${this.domicilio.municipio}`
    }
}
console.log(persona.getDomicilio())