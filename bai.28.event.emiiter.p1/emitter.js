// emitter.js

function Emitter() {
    this.events = {};
    
}

Emitter.prototype.on = function (type, listerner) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listerner);
}


Emitter.prototype.emit = function (type) {
    if (this.events[type]){
        this.events[type].forEach(function (listerner) {
            listerner(); // duyet mang va goi ham.
        })
    }
}

module.exports = Emitter;