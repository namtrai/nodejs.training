var Dialog = require('./dialog');

var dialog = new Dialog();

dialog.on("hello", function (data) {
    console.log("co mot loi chao moi", data);
    
})

dialog.sayHello("Nam Trai");