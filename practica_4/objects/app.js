let persona = {
  nombre: 'Roman',
  apellido: 'Herrera',
  getName: function(){
      return `${this.nombre} ${this.apellido}`
  },
  domicilio:{
      calle:'Una calle',
      colonia: 'Colima',
      cp: 222222,
      municipio: 'Colima'
  },
  getDomicilio: function(){
      return `${this.domicilio.calle} Colonia: ${this.domicilio.colonia} CP: ${this.domicilio.cp}, ${this.domicilio.municipio}`
  }
}
console.log(persona.getDomicilio())
