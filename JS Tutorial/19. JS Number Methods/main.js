var x = 123;
console.log(x.toString());
console.log((123).toString());
console.log((100 + 23).toString());

var x = 9.656;
console.log(x.toExponential());
console.log(x.toExponential(0));
console.log(x.toExponential(2));
console.log(x.toExponential(4));
console.log(x.toExponential(6));

var x = 9.656;
console.log(x.toFixed(0));
console.log(x.toFixed(2));
console.log(x.toFixed(4));
console.log(x.toFixed(6));

var x = 9.656;
console.log(x.toPrecision());
console.log(x.toPrecision(2));
console.log(x.toPrecision(4));
console.log(x.toPrecision(6));

var x = 123;
console.log(x.valueOf());
console.log((123).valueOf());
console.log((100 + 23).valueOf());

console.log(Number(true));          // returns 1
console.log(Number(false));         // returns 0
console.log(Number("10"));          // returns 10
console.log(Number("  10"));        // returns 10
console.log(Number("10  "));        // returns 10
console.log(Number(" 10  "));       // returns 10
console.log(Number("10.33"));       // returns 10.33
console.log(Number("10,33"));       // returns NaN
console.log(Number("10 33"));       // returns NaN 
console.log(Number("John"));        // returns NaN

console.log(Number(new Date("2017-09-30")));

console.log(parseInt("10"));      
console.log(parseInt("10.33"));   
console.log(parseInt("10 20 30"));
console.log(parseInt("10 years"));
console.log(parseInt("years 10"));

console.log(parseFloat("10"));      
console.log(parseFloat("10.33"));   
console.log(parseFloat("10 20 30"));
console.log(parseFloat("10 years"));
console.log(parseFloat("years 10"));

var x = Number.MAX_VALUE;
console.log(x);
var x = Number.MIN_VALUE;
console.log(x);

var x = Number.POSITIVE_INFINITY;
console.log(x);
var x = 1 / 0;
console.log(x);

var x = Number.NEGATIVE_INFINITY;
console.log(x);
var x = -1 / 0;
console.log(x);

var x = 6;
var y = x.MAX_VALUE;
console.log(y);