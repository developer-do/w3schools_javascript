var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo2").innerHTML = fruits.join(" * ");

var fruits = ["Banana", "Orange", "Apple", "Mango"];
popping = fruits.pop();
console.log(popping);
document.getElementById("demo3").innerHTML = fruits.toString();

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.push("Kiwi");
document.getElementById("demo4").innerHTML = fruits.join(" / ");
document.getElementById("demo5").innerHTML = x;

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.shift();
document.getElementById("demo6").innerHTML = fruits.join(" / ");
document.getElementById("demo7").innerHTML = x;

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.unshift("Lemon");
document.getElementById("demo8").innerHTML = fruits.join(" / ");
document.getElementById("demo9").innerHTML = x;

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";
document.getElementById("demo10").innerHTML = fruits.join(" / ");

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";
document.getElementById("demo11").innerHTML = fruits.join(" / ");

var fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];
document.getElementById("demo12").innerHTML = fruits.join(" / ");

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.splice(2, 2, "Lemon", "Kiwi");
document.getElementById("demo13").innerHTML = fruits.join(" , ");
document.getElementById("demo14").innerHTML = x;

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
document.getElementById("demo15").innerHTML = fruits.join(" , ");

var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);
console.log(myChildren);

var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);
console.log(myChildren);

var arr1 = ["Cecilie", "Lone"];
var myChildren = arr1.concat(["Emil", "Tobias", "Linus"]);
console.log(myChildren);

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1);
document.getElementById("demo16").innerHTML = citrus;

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(3);
document.getElementById("demo17").innerHTML = citrus;

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
document.getElementById("demo18").innerHTML = citrus;

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(2);
document.getElementById("demo19").innerHTML = citrus;

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo20").innerHTML = fruits.toString();

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo21").innerHTML = fruits;