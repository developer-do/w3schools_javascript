myObj = { "name": "John", "age": 30, "car": null };
x = myObj.name;
console.log(x);

myObj = { "name": "John", "age": 30, "car": null };
x = myObj["age"];
console.log(x);

myObj = {"name":"John", "age":30, "car":null};
for(x in myObj) {
  document.getElementById("demo1").innerHTML += x + "\t";
  document.getElementById("demo2").innerHTML += myObj[x] + "\t";
}

myObj1  = {
  "name":"john",
  "age":30,
  "cars": {
    "car1":"Ford",
    "car2":"BMW",
    "car3":"Fiat"
  }
}
x = myObj1.cars.car1;
console.log(x);
// or:
x = myObj1.cars["car2"];
console.log(x);

/* 
myObj1.cars.car2 = "Mercedes";


*/
console.log(myObj1);
myObj1.cars["car2"] = "Mercedes";
console.log(myObj1);
delete myObj1.cars.car2;
console.log(myObj1);