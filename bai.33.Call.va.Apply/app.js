var obj = {
    name: "Nam trai",
    sayHello: function (param1, param2) {
        console.log(`Hello ${this.name}`);
        console.log("Param: ",param1, param2);
        
    }
}

obj.sayHello("Xin Chao", "Nam dep trai");

obj.sayHello.call({name: "Thuy Osimi"}, "Xin Chao", "Thuy Osimi");

obj.sayHello.apply({name: "Thuy Osimi 2"}, ["Xin Chao", "Thuy Osimi"]);