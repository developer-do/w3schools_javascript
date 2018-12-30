function loadDoc(url, cFunction) {
  var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      cFunction(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function myFunction1(xhttp) {
  document.getElementById("demo").innerHTML = xhttp.responseText;
  document.getElementById("demo1").innerHTML = xhttp.getAllResponseHeaders();
  document.getElementById("demo2").innerHTML = xhttp.getResponseHeader("Last-Modified");
}
function myFunction2(xhttp) {
  document.getElementById("demo").innerHTML = xhttp.responseText;
  document.getElementById("demo1").innerHTML = xhttp.getAllResponseHeaders();
  document.getElementById("demo2").innerHTML = xhttp.getResponseHeader("Last-Modified");
}

/* var xhttp = newXMLHttpRequest();
xhttp.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 200) {
    document.getElementById("demo1").innerHTML = this.getAllResponseHeaders();
  }
} */