var para = document.createElement("p");
var node = document.createTextNode("This is new");
para.appendChild(node);

var div1 = document.getElementById("div1");
div1.appendChild(para);


var para = document.createElement("p");
var node = document.createTextNode("This is new");
para.appendChild(node);

var element = document.getElementById("div1");
var child = document.getElementById("p1");
element.insertBefore(para, child);