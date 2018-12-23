var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.sort();
console.log(x);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.sort();
console.log(x);
var y = fruits.reverse();
console.log(y);

var points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return a - b });
console.log(points);

points.sort(function (a, b) { return b - a });
console.log(points);


var points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo1").innerHTML = points;

function myFunction1() {
  points.sort();
  document.getElementById("demo1").innerHTML = points;
}

function myFunction2() {
  points.sort(function (a, b) { return a - b });
  document.getElementById("demo1").innerHTML = points;
}




setInterval(function () {
  var points = [40, 100, 1, 5, 25, 10];
  points.sort(function (a, b) { return 0.5 - Math.random() });
  document.getElementById("demo2").innerHTML = points;
}, 1000);


var cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 }
];
console.log(cars);

cars.sort(function (a, b) { return a.year - b.year });
console.log(cars);