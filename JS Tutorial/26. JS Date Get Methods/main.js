var d = new Date();
document.getElementById("demo").innerHTML = d.getTime();

var d = new Date();
document.getElementById("demo1").innerHTML = d.getFullYear();

var d = new Date();
document.getElementById("demo2").innerHTML = d.getMonth();

var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("demo3").innerHTML = months[d.getMonth()];

var d = new Date();
document.getElementById("demo4").innerHTML = d.getDate();

var d = new Date();
document.getElementById("demo5").innerHTML = d.getHours();

var d = new Date();
document.getElementById("demo6").innerHTML = d.getMinutes();

var d = new Date();
document.getElementById("demo7").innerHTML = d.getSeconds();

var d = new Date();
document.getElementById("demo8").innerHTML = d.getMilliseconds();

var d = new Date();
document.getElementById("demo9").innerHTML = d.getDay();

var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("demo10").innerHTML = days[d.getDay()];