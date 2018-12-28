function myFunction(){
  alert("Hello");
}

var myVar2 = setInterval(myTimer2, 1000);

function myTimer2() {
  var d = new Date();
  document.getElementById("demo3").innerHTML = d.toLocaleTimeString();
}