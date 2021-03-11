let persona = { 
    nombre: "Kenia",
    apellido: "Villa",
    getName : function () {
        return `${this.nombre} ${this.apellido}`
    }
}
let domicilio = {
        calle: "Hidalgo #8",
        colonia: "Centro",
        cp: 28750,
        municipio: "Minatitlán",
        getAddress: function(){
            return `${this.calle}, Colonia: ${this.colonia}, CP: ${this.cp} , ${this.municipio}`
        }
    }
  
console.log(domicilio.getAddress());


