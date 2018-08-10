var util = require("util");

function Person() {
    this.firstName = "Nam";
    this.lastName = "Dep Trai";
}

Person.prototype.sayHello = function () {
    console.log("Hello " + this.firstName + " " + this.lastName );
}

function Student() {
    Person.call(this);
    this.id = "1234";
}

util.inherits(Student, Person);

var sv = new Student()

sv.sayHello();