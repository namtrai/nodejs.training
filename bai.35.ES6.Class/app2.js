//'use strict';

class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    } // dinh nghia function
    sayHello (){
        console.log("Hello "+ this.firstName +" " + this.lastName);
        
    }
}

var p = new Person("Nam", "Trai");
p.sayHello();

var p2 = new Person("Thuy", "Osimi");
p2.sayHello();

console.log(p.__proto__);
console.log(p2.__proto__);
console.log(p2.__proto__ === p.__proto__);

