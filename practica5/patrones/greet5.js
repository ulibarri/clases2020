const greet3 = require("./greet3");

let greeting = "Hello from greet5";

let greet1 = () => {
    console.log(greeting);
}

module.exports = {
    greet1: greet1
}