var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.firstName);
console.log(person["lastName"]);

var name = person.fullName;
console.log(name);
console.log(person.fullName());