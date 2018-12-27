var myBtn = document.getElementById("myBtn");
var demo1 = document.getElementById("demo1");

myBtn.addEventListener("click", function () {
  demo1.innerHTML = Date();
});


window.addEventListener("resize", function(){
  document.getElementById("demo").innerHTML = Math.floor(Math.random() * 200);
});

var clickMe = document.getElementById("clickMe");
var demo2 = document.getElementById("demo2");
var p1 = Math.floor(Math.random() * 50);
var p2 = 5;


clickMe.addEventListener("click", function () {
  mul(p1, p2);
});

function mul(a, b) {
  var result = a * b;
  document.getElementById("demo2").innerHTML = result;
}