var myCollection = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML = myCollection.length;

var collP = document.getElementsByTagName("p");
var i = 0;

for(i = 0; i < collP.length; i++) {
  collP[i].style.background = "lightblue";
  collP[i].style.color = "red";
}

