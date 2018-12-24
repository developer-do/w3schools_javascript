var x = function (a, b) {
  return a * b;
}
var z = x(4, 3);
console.log(z);


var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 5);
console.log(x);

console.log(myFunction1(5));

function myFunction1(y) {
  return y * y;
}

function myFunc(a, b) {
  return a * b;
}

var x = myFunc(44, 3) * 5;
console.log(x)

function arg(a, b) {
  return arguments.length;
}

console.log(arg(1, 3, 5, 5));

function myFunc2(a, b) {
  return a * b;
}
var txt = myFunc2.toString();
console.log(txt);

const xx = (x, y) => { return x * y };
console.log(xx);