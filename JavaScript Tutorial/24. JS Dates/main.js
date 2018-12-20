var d = new Date();
console.log(d);

var d = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(d);

var d = new Date(2018, 11, 24, 10, 33, 30);
console.log(d);

var d = new Date(2018, 11, 24, 10, 33);
console.log(d);

var d = new Date(2018, 11, 24, 10);
console.log(d);

var d = new Date(2018, 11, 24);
console.log(d);

var d = new Date(2018, 11);
console.log(d);

var d = new Date(2018);
console.log(d);

var d = new Date(99, 11, 24);
console.log(d);

var d = new Date(9, 11, 24);
console.log(d);

var d = new Date("October 13, 2014 11: 13:00");
console.log(d);

var a = new Date();
document.getElementById("demo1").innerHTML = a;

var d = new Date();
document.getElementById("demo2").innerHTML = d.toUTCString();

var d = new Date();
document.getElementById("demo3").innerHTML = d.toDateString();