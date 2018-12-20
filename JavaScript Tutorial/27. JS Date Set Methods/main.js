var d = new Date();
d.setFullYear(2020);
document.getElementById("demo").innerHTML = d;

var d = new Date();
d.setFullYear(2020, 11, 3);
document.getElementById("demo1").innerHTML = d;

var d = new Date();
d.setMonth(5);
document.getElementById("demo2").innerHTML = d;

var d = new Date();
d.setDate(20);
document.getElementById("demo3").innerHTML = d;

var d = new Date();
d.setDate(d.getDate() + 50);
document.getElementById("demo4").innerHTML = d;

var d = new Date();
d.setHours(22);
document.getElementById("demo5").innerHTML = d;

var d = new Date();
d.setMinutes(30);
document.getElementById("demo6").innerHTML = d;

var d = new Date();
d.setSeconds(30);
document.getElementById("demo7").innerHTML = d;

var today, someday, text;
today = new Date();
someday = new Date();
someday.setFullYear(2100, 0, 14);

if(someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}
document.getElementById("demo8").innerHTML = text;