var person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
var x = person.length;
var y = person[0];
console.log(x);
console.log(y);
console.log(person);

var person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
var x = person.length;
var y = person[0];
console.log(x);
console.log(y);
console.log(person);

function myFunction() {
  for(var i = 0; i < 10; i++) {
    // some code
  }
  return i;  
}
console.log(myFunction());
