var x = 999999999999999;
var y = 9999999999999999;
console.log(x);
console.log(y);

var x = 0.2 + 0.1;
console.log(x);

var x = (0.2 * 10 + 0.1 * 10) / 10;
console.log(x);

var x = "100";
var y = "10";
var z = x / y;
console.log(z);
var z = x * y;
console.log(z);
var z = x - y;
console.log(z);
var z = x + y;
console.log(z);

var x = 100 / "Apple";
console.log(x);

var x = 100 / "Apple";
console.log(isNaN(x)); 

var x = NaN;
var y = 5;
var z = x + y;
console.log("x + y = " + z);

var x = NaN;
var y = "5";
var z = x + y;
console.log(z);
console.log(typeof x);

var myNumber = 2;
while(myNumber != Infinity) {
  myNumber = myNumber * myNumber;
  console.log(myNumber);
}

var x =  2 / 0;
var y = -2 / 0;
console.log(x);
console.log(y);
console.log(typeof Infinity);

var x = 0xFF;
console.log(x);

var myNumber = 32;
console.log(myNumber.toString(10));    // returns 32
console.log(myNumber.toString(32));    // returns 10
console.log(myNumber.toString(16));    // returns 20
console.log(myNumber.toString(8));    // returns 40
console.log(myNumber.toString(2));    // returns 100000
