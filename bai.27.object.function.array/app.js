var obj = {
    sayHello: "Hello"
}

console.log(obj.sayHello);
console.log(obj["sayHello"]);

var prop = "sayHello";
console.log(obj[prop]);


//function

var array = [];

array.push(function(){
    console.log("Hello Nodejs 1");
});

array.push(function(){
    console.log("Hello Nodejs 2");
});

array.push(function(){
    console.log("Hello Nodejs 3");
});

array[0]();
array[1]();
array[2]();

console.log("==========");


//for

array.forEach(function (item) {
    item();
});