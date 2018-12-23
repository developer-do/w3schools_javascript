var car = ["Saab", "Volvo", "BMW"];
console.log(car);
var name = car[0];
console.log(name);

var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = "cars[0] = " + cars[0];
cars[0] = "Opel";
console.log(cars);
document.getElementById("demo1").innerHTML = "cars[0] = " + cars[0];
document.getElementById("demo2").innerHTML = "cars = " + cars;

var person = ["John", "Doe", 46];
document.getElementById("demo3").innerHTML = "person[0] = " + person[0];

var person = { firstName: "John", lastName: "Doe", age: 46 };
document.getElementById("demo4").innerHTML = "person.firstName = " + person.firstName;

var x = cars.length;
console.log(x);
var x = cars.sort();
console.log(x);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.length;
console.log("fruits.length = " + x);

var first = fruits[0];
document.getElementById("demo5").innerHTML = first;

var last = fruits[fruits.length - 1];
document.getElementById("demo6").innerHTML = last;



var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

text = "<ul>";
for(i = 0; i < fLen; i++){
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("divWrap").innerHTML = text;


var fruits, text;
fruits = ["Banana", "Orange", "Apple", "Mango"];

text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}

document.getElementById("divWrap1").innerHTML = text;


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon");
console.log(fruits);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Lemon";
console.log(fruits);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[6] = "Lemon";  
console.log(fruits);

var person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
var x = person.length;
var y = person[0];
console.log("person.length = " + x);
console.log("person[0] = " + y);

/* 오류 */
var person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
var x = person.length;
var y = person[0];

console.log(x);
console.log(y);

var fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(typeof fruits);