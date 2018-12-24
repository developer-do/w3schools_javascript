function Person(first, last, age, eye){
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}
console.log(Person());

var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

console.log(myFather);
console.log(myMother);
console.log(myFather.fullName());
myFather.nationality = "English";
console.log(myFather);

Person.nationality = "English";
console.log(Person);

function Person2(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}
console.log(Person2);

function Person3(firstName, lastName, age, eyeColor) {
  this.firstName = firstName;  
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;
  this.changeName = function (name) {
    this.lastName = name;
  };
}

var me = new Person3("Kim", "DoHyun", 27, "black");
console.log(me);
me.changeName("youngTae");
console.log(me);