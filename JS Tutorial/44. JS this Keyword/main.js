"use strict";
var person = {
  firstName : "John",
  lastName  : "Doe",
  od        : 5566,
  fullName  : function() {
    return "fullName = " + this.firstName + " " + this.lastName;
  }
}
console.log(person.fullName());

var x = this;

console.log(x);


var x = this;
console.log(x);

function myFunction(){
  return this;
}
console.log(myFunction());

var person = {
  firstName : "John",
  lastName  : "Doe",
  id        : 5566,
  myFunction: function(){
    return this;
  }
};
console.log(person.myFunction());

var person1 = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

var person2 = {
  firstName: "John",
  lastName: "Doe",
}
var person3 = {
  firstName: "Kim",
  lastName: "DoHyun"
}

console.log(person1.fullName.call(person2));
console.log(person1.fullName.call(person3));