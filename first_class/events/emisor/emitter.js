class Emitter {
  constructor() {
    this.events = {};
  }
  on(type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
  }
  emit(type) {
    this.events[type]?.forEach((listener) => listener());
  }
}
module.exports = Emitter;
