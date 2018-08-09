var Emitter = require("events");
var eventConfig = require("./config").events;

var emitter = new Emitter();



emitter.on(eventConfig.BAD_SCORE, function () {
    console.log("1 mon nao do bi diem kem!!!");
    
});

emitter.on(eventConfig.BAD_SCORE, function () {
    console.log("da co diem kem, phai thong bao");
    
});


// bang diem
var scores = [10,4];

for (var s of scores){
    if (s < 5){
        console.log("diem kem qua", s);
        emitter.emit(eventConfig.BAD_SCORE);
    }
    // lam gi do
}