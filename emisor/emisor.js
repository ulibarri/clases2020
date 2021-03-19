function Emisor() {
    this.events = {};
}

Emisor.prototype.on = function (type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

Emisor.prototype.emit = function (type) {
    if (this.events[type]){
        this.events[type].forEach(function (listener) {
            listener();
        })
    }
}

module.exports = Emisor;