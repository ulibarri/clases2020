function emitter(){
    this.events = {};

}
emitter.prototype.on = function (type, listener){
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

emitter.prototype.on = function (type) { 
    if (this.events[type]) {
        this.events[type].array.forEach(function (listener){
            listener();
        });
    }
}
module.exports = emitter;