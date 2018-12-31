var obj = JSON.parse('{"name":"John", "age": 30, "city": "New York"}');
console.log(obj);
document.getElementById("demo").innerHTML = obj.name + " " + obj.age;

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("demo1").innerHTML = myObj.name + "의 나이는 " + myObj.age + "살 입니다.";
  }
};
xmlhttp.open("GET", "json_demo.json", true);
xmlhttp.send();

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    document.getElementById("demo2").innerHTML = myArr[0] + " " + myArr.length;
  }
}
xmlhttp.open("GET", "json_demo_array.json", true);
xmlhttp.send();

var text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
var obj = JSON.parse(text);
obj.birth = new Date(obj.birth);

document.getElementById("demo3").innerHTML = obj.name + "의 생일은 " + obj.birth + "입니다.";


var text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
var obj = JSON.parse(text, function (key, value) {
  if(key == "birth") {
    return new Date(value);
  } else {
    return value;
  }
});

document.getElementById("demo4").innerHTML = obj.name + "의 생일은 " + obj.birth + "입니다.";

var text = '{ "name":"John", "age":"function () {return 30;}", "city":"New York"}';
var obj = JSON.parse(text);
obj.age = eval("(" + obj.age + ")");

document.getElementById("demo5").innerHTML = obj.name + ", " + obj.age();