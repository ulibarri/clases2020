const Emitter = require("./emitter")

module.exports = {
    events: {
        greet: 'greet',
        jump: 'jump'
    }
}

emtr.on('greet', () => {
    console.log('somewhere, someone sadi gelou');
});

emtr.on(config.events.Greet, ()=> {
    console.log('somewhere, someone said  hello.');
});