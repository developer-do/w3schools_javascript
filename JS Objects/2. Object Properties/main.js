var txt = "";
var person = { fname: "John", lname: "Doe", age: 25 };

for(x in person) {
  txt += person[x];
}
console.log(txt);


var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
console.log(person);
delete person.age;
console.log(person);