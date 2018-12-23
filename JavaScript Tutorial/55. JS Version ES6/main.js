var x = 5;
var z = x ** 9;   // result is 25
console.log(z);

function myFunction(x, y = 10) {
  // y is 10 if not passed or undefined
  return x + y;
}
console.log(myFunction(5));

var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(function(value){
  return value > 18;
});
console.log(first);

var numbers = [4, 9, 16, 25, 29];
var first = numbers.findIndex(function(value){
  return value > 18;
});
console.log(first);


var x = Number.EPSILON;
console.log(x);

var x = Number.MIN_SAFE_INTEGER;
console.log(x);

var x = Number.MAX_SAFE_INTEGER;
console.log(x);

const xx = (x, y) => x * y;
console.log(xx(5, 6));

const xy = (x, y) => { return x + y };
console.log(xy(10, 24));