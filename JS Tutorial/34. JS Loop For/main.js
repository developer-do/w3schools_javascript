var text = "";
for (var i = 0; i < 5; i++) {
  text += "The number is " + i + "<br/>";
}
console.log(text);


var person = { fname:"John", lname:"Doe", age: 25 };

var text = "";
var x;
for(x in person) {
  text += person[x] + "\t";
}

console.log(text);