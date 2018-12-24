var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
console.log(person.fullName());

var x = person;
console.log(x);
console.log(person);
console.log(x === person);

x.age = 10;
console.log(x);
console.log(person);