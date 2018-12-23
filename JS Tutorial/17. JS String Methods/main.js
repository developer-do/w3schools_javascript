var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
console.log("txt.length = " + sln);


var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
console.log(pos);

var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");
console.log(pos);

var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("John");
console.log(pos);

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate",15);
console.log(pos);

var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
console.log(pos);

var str = "Apple, Banana, Kiwi";
var pos = str.slice(7, 13);
console.log(pos);

var str = "Apple, Banana, Kiwi";
var pos = str.slice(-12, -6);
console.log(pos);
var pos1 = str.slice(7);
console.log(pos1);
var pos2 = str.slice(-12);
console.log(pos2);

var str = "Apple, Banana, Kiwi";
var pos = str.substring(7, 13);
console.log(pos);
var pos1 = str.substring(7);
console.log(pos1);

var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6); 
console.log(res);

var str = "Apple, Banana, Kiwi";
var res = str.substr(7); 
console.log(res);

var str = "Apple, Banana, Kiwi";
var res = str.substr(-4);
console.log(res);

var str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
console.log(n);

str = "Please visit Microsoft and Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
console.log(n);

str = "Please visit Microsoft!";
var n = str.replace("MICROSOFT", "W3Schools");
console.log(n);

str = "Please visit Microsoft!";
var n = str.replace(/MICROSOFT/i, "W3Schools");
console.log(n);

str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/MICROSOFT/ig, "W3Schools");
console.log(n);

var text1 = "Hello World!";
var text2 = text1.toUpperCase();
console.log(text2);
var text3 = text2.toLowerCase();
console.log(text3);

var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);
console.log(text3);


var text = "Hello" + " " + "World!";
console.log(text);
var text = "Hello".concat(" ", "World!");
console.log(text);

var str = "      Hello World!       ";
console.log(str);
console.log(str.trim());


if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  }
};
var str = "       Hello World!        ";
console.log(str.trim());

var str = "HELLO WORLD";
var ch = str.charAt(0);
console.log(ch);

var str = "HELLO WORLD";  
var ch = str.charCodeAt(0);
console.log(ch);

var str = "HELLO WORLD";
var ch = str[0];
console.log(ch);

var txt = "a,b,c,d,e";
var sp = txt.split(",");
console.log(sp);
var sp = txt.split(" ");
console.log(sp);
var sp = txt.split("|");
console.log(sp);

var txt = "Hello";
var sp = txt.split("");
console.log(sp);
var sp = txt.split();
console.log(sp);