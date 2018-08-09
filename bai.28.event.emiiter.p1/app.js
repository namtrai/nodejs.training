var Emitter = require("./emitter");

var emitter = new Emitter();

emitter.on("bad", function () {
    console.log("1 mon nao do bi diem kem!!!");
    
});

emitter.on("bad", function () {
    console.log("da co diem kem, phai thong bao");
    
});


// bang diem
var scores = [10,4];

for (var s of scores){
    if (s < 5){
        console.log("diem kem qua", s);
        emitter.emit("bad");
    }
    // lam gi do
}