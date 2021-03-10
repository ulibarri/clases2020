let persona = {
    nombre: "Ximena",
    apellido: "Velasco",
    getName: function(){
        return `${this.nombre} ${this.apellido}`
    }
}

console.log(persona.getName());

let persona2 = {
    nombre: "Ximena",
    apellido: "Velasco",
    getName: function(){
        return `${this.nombre} ${this.apellido}`
    },
    domicilio:{
        calle: "Madero #144",
        colonia: "Centro",
        cp: 28000,
        municipio: "Colima"
    }
}

console.log(persona2.domicilio);

//Ejercicio 

let persona3 = {
    nombre: "Ximena",
    apellido: "Velasco",
    calle: "Madero #144",
    colonia: "Centro",
    cp: 28000,
    municipio: "Colima",
    getName: function(){
        return `${this.nombre} ${this.apellido}`
    },
    getDomicilio: function(){
       return `${this.calle} ${this.colonia} ${this.cp} ${this.municipio}`
    }
}

console.log(persona3.getDomicilio());