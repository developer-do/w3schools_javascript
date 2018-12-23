document.getElementById("demo1").innerHTML = new Date();

var d = new Date("2015-03-25");
document.getElementById("demo2").innerHTML = d;

var d = new Date("2015-03");
document.getElementById("demo3").innerHTML = d;

var d = new Date("2015");
document.getElementById("demo4").innerHTML = d;

var d = new Date("03/25/2015");
document.getElementById("demo5").innerHTML = d;

var d = new Date("Mar 25 2015");
console.log(d);

var msec = Date.parse("March 21, 2012");
console.log(msec);

var msec = Date.parse("March 21, 2012");
var d = new Date(msec);
console.log(d);