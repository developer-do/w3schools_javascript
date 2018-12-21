var i = 0;
var text = "";
for (i = 0; i < 10; i++) {
  if( i === 3 ) {
    break;
  }
  text += "The number is " + i + "\n";
  console.log(text);
}

var i = 0;
var text = "";

for(var i = 0; i < 10; i++) {
  if(i === 3) {
    continue;
  }
  text += "the number is " + i + "\n";
  console.log(text);
}



var cars = ["BMW", "Volvo", "Saab", "Ford"];
list : {
  text += cars[0] + "\n";
  text += cars[1] + "\n";
  break list;
  text += cars[2] + "\n";
  text += cars[3] + "\n";
}

console.log(text);