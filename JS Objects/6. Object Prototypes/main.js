function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}
console.log(myFather);

var myFather = new Person("John", "Doe", 50, "blue");
console.log(myFather);
Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};

Person.prototype.nationality = "English";
console.log(myFather.name());