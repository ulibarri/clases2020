const persona = {
  nombre: 'Ulises',
  appellido: 'Ramirez',
  getName: function () {
    return `${this.nombre} ${this.apellido}`;
  },
  domicilio: {
    calle: 'Belisario Dominguez #39A',
    colonia: 'Centro',
    cp: '28510',
    municipio: 'Cuahutemoc',
  },
  getDomicilio: function () {
    const { calle, cp, colonia, municipio } = this.domicilio;
    return `${calle}, CP:${cp}, COLONIA:${colonia}, ${municipio}`;
  },
};
console.log(persona.getDomicilio());
