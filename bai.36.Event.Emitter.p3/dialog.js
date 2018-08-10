///'use strict';
/// node 8 ko can use strict luon

var EventEmitter = require("events");

module.exports = class Dialog extends EventEmitter{ constructor(){
        super();
        this.message = "Hello World";
    }
    sayHello(data){
        console.log(`${this.message} : ${data}`);
        this.emit("hello",data)
    }
}


