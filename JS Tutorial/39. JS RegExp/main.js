var str = "Visit W3Schools!";
var n = str.search("W3Schools");
console.log(n);


var str = "Visit W3Schools";
var n = str.search(/w3schools/i);
console.log(n);

var str = "Visit Microsoft!";
var res = str.replace("Microsoft", "W3Schools");
console.log(res);

var str = "Visit Microsoft!";
var res = str.replace(/microsoft/i, "W3Schools");
console.log(res);

var str1 = "green apple";
var str2 = "apple red";
var reg = /green|red/;
console.log(str1.replace(reg, "바껴라!"));
console.log(str2.replace(reg, "바껴라!"));

var regS = /\S\w*/g;
console.log(str2.replace(regS, "굳"));

var str1 = "A ghost booooed";
var str2 = "A bird warbled";
var str3 = "A goat grunted";
var regg = /bo*/;

console.log(str1.match(regg));
console.log(str2.match(regg));
console.log(str1.replace(regg, "바껴랏"));
console.log(str2.replace(regg, "바껴랏"));
console.log(str3.match(regg));

var patt = /e/;
console.log(patt.test("The best things in life are free!"));
console.log(/e/.test("The best things in life are free!"));

console.log(/e/g.exec("The best things in life are free!"));