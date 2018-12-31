var obj = { name: "John", age: 30, city: "New York" };
var myJSON = JSON.stringify(obj);
console.log(obj);
console.log(myJSON);

document.getElementById("demo").innerHTML = myJSON;

var arr = ["John", "Peter", "Sally", "Jane"];
var myJSON1 = JSON.stringify(arr);

console.log(arr);
console.log(myJSON1);


var obj = { name: "John", today: new Date(), city: "New York" };
var myJSON = JSON.stringify(obj);

document.getElementById("demo2").innerHTML = myJSON;

var obj = { name: "John", age: function () {return 30;}, city: "New York"};
var myJSON = JSON.stringify(obj);

document.getElementById("demo3").innerHTML = myJSON;

var obj = { name: "John", age: function () {return 30;}, city: "New York"};
obj.age = obj.age.toString();
var myJSON = JSON.stringify(obj);

document.getElementById("demo4").innerHTML = myJSON;