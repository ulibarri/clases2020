let persona = {
    nombre: 'Ana',
    apellido: 'Landin',
    getName: function(){
        return `${this.nombre} ${this.apellido}`
    },
    domicilio:{
        calle:'Manuel Acuña #385',
        colonia: 'Colima',
        cp: 28010,
        municipio: 'Colima'
    },
    getDomicilio: function(){
        return `${this.domicilio.calle} Colonia: ${this.domicilio.colonia} CP: ${this.domicilio.cp}, ${this.domicilio.municipio}`
    }
}
console.log(persona.getDomicilio())