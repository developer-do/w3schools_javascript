var text = "";
var i = 0;
while (i < 10) {
  text += "The number is " + i + "\n";
  i++;
  console.log(text);
  console.log(i);
}

var text = "";
var i = 0;
do {
  text += "The number is " + i + "\n";
  console.log(text);
  i++;
  console.log(i);
}
while (i < 10);

var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;
var text = "";

for (; cars[i];) {
  text += cars[i] + "\n";
  console.log(text);
  i++;
}


var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;
var text = "";
while (cars[i]) {
  text = cars[i] + "\n";
  console.log(text);
  i++;
}
