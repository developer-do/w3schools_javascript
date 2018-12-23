console.log("John".constructor);
console.log((3.14).constructor);
console.log(false.constructor);
console.log([1, 2, 3, 4].constructor);
console.log({ name: 'John', age: 34 }.constructor);
console.log(new Date().constructor);
console.log(function () { }.constructor);


function isArray(myArray) {
  return myArray.constructor.toString().indexOf("Array") > -1;
}

function isArray(myArray) {
  return myArray.constructor === Array;
}

var y = "5";
var x = + y;
console.log(y);
console.log(x);

var y = "John";
var x = + y;
console.log(y);
console.log(x);

d = new Date();
dd = Number(d);
console.log(dd);

d = new Date();
dd = d.getTime();
console.log(dd);