var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);
function myFunction(value, index, array) {
  txt = txt + value + "<br/>";
};


var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);
function myFunction(value) {
  txt = txt + value + "<br/>";
}
document.getElementById("demo1").innerHTML = txt;

var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);
var numbers3 = numbers1.map(function (a) {
  return a * 3;
});

function myFunction(value) {
  return value * 2;
}
document.getElementById("demo2").innerHTML = numbers2;
document.getElementById("demo3").innerHTML = numbers3;


var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);
  
function myFunction(value) {
  return value > 18;
}
console.log(over18);
document.getElementById("demo4").innerHTML = over18;

var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction, 100);
var num = 0;
var sum2 = numbers1.reduce(function (a, b) {
  return a + b;
},100);


function myFunction(total, value) {
  return total + value;
}
document.getElementById("demo5").innerHTML = sum;

var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduceRight(myFunction);
  
function myFunction(total, value) {
  return total + value;
}
document.getElementById("demo6").innerHTML = sum;


var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);

function myFunction(value) {
  return value > 18;
}
document.getElementById("demo7").innerHTML = allOver18;

var numbers = [45, 4, 9, 16, 25];
var someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
document.getElementById("demo8").innerHTML = someOver18;

var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");
console.log(a);


var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.lastIndexOf("Apple");
console.log(a);

var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);
  
function myFunction(value, index, array) {
  return value > 18;
}
console.log(first);

var numbers = [4, 9, 16, 25, 29];
var first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(first);