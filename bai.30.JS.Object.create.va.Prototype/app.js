var person = {
    firstName: "",
    lastName: "",
    getFullname: function () {
        return this.firstName + " " + this.lastName;
    }
}

var Nam = Object.create(person);
Nam.firstName = "nam";
Nam.lastName = "dep trai";

var yen = Object.create(person);
yen.firstName = "Yen";
yen.lastName = "xinh gai";

console.log(Nam.getFullname());
console.log(yen.getFullname());


