function emmiter() {
    this.events = {}
}

emmiter.prototype.on = function (type, listener) {
    this.events[type] = this.events[type] || []
    this.events[type].push(listener)
}

emmiter.prototype.emit = function (type) {
    if (this.events[type]) {
        this.events[type].forEach(function (listener) {
            listener()
        })
    }
}

module.exports = emmiter