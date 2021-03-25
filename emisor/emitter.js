//creando oel el constructor de Emitter
function Emitter() {
    this.events = {};
}
//Creando el prototype con la función on
Emitter.prototype.on = function (type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}
//Creando el prototype con la función emit
Emitter.prototype.emit = function (type) {
    if (this.events[type]) {
        this.events[type].forEach(function (listener) {
            listener();
        });
    }
}
//Exportando el modulo
module.exports = Emitter;