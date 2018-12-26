var myElement = document.getElementById("intro");
var myElement1 = document.getElementById("intro1");
console.log(myElement);
console.log(myElement1);
myElement.style.width = "100px";
myElement.style.height = "100px";
myElement.style.background = "blue";


var x = document.getElementsByTagName("p");
// console.log(x[3].innerText = "바보");

var x = document.getElementById("main");
var y = x.getElementsByTagName("p");
console.log(y);
var x = document.getElementsByClassName("intro");
console.log(x);
var x = document.getElementById("wrap");
var y = document.querySelectorAll("p.intro");
var z = x.querySelectorAll("p.intro");
console.log(x);
console.log(y);
console.log(z);

function myFunction5() {
  var x = document.forms["frm1"];
  var txt = "";
  var i;
  for (i = 0; i < x.length; i++){
    console.log(x.elements[i]);
    txt += x.elements[i].value + "\n";
  }
  console.log(txt);
}