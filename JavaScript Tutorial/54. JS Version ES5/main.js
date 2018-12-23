var str = "            Hello World!          ";
console.log("str.trim() =", str.trim());

function myFunction(){
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  console.log("Array.isArray(fruits) =",Array.isArray(fruits));
}
myFunction();

var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction1);

function myFunction1(val) {
  txt = txt + val + "\n";
}
console.log(txt);

var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(function (value) {
  console.log(value + " * 5 = ", value * 5);
});

var numbers = [45, 4, 9, 16, 25];
var txt = "";
var over18 = numbers.filter(function (a, i) {
  txt = (i + 1) + "번째 " + a + " > 18 = " + (a > 18);
  console.log(txt);
});

var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(function (total, value) {
  console.log("reduce!  " + total + " + " + value + " =  "  + (total + value));
  return total + value;
});

var number = [45, 4, 9, 16, 25];
var sum = number.reduceRight(function(t, v){
  console.log("reduceRight!  " + t + " + " + v + " = " + (t + v));
  return t + v;
});

var number = [45, 4, 9, 16, 25];
var allOver18 = number.every(function (a) {
  console.log(a > 18);
  return a > 18;
});
console.log(allOver18);

var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.some(function(a){
  console.log(a > 18);
  return a > 18;
});
console.log(allOver18);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");
console.log(a);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.lastIndexOf("Apple");
console.log(a);

var txt = '{"name":"John", "age":30, "city":"New York"}';
var obj = JSON.parse(txt);
console.log(obj);

var person = {
  fullName: function () {
    return this.name + " " + this.age + " " + this.city;
  }
}
console.log(person.fullName.apply(obj));

var obj = { "name": "John", "age": 30, "city": "New York" };
var myJSON = JSON.stringify(obj);
console.log(myJSON);

var timInMSs = Date.now();
console.log(timInMSs);

var person = {
  firstName: "John",
  lastName : "Doe",
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person.fullName);

var person = {
  firstName: "John",
  lastName : "Doe",
  language : "NO",
  get lang() {
    return this.language;
  },
  set lang(value) {
    this.language = value.toUpperCase();
  }
};

console.log(person.lang);
console.log(person);
person.lang = "en";
console.log(person.lang);
console.log(person);


// Create an Object:
var person1 = {
  firstName: "John",
  lastName: "Doe",
  language: "No"
};
console.log(person1);

// Change a Property:
Object.defineProperty(person1, "language", {
  value: "EN",
  writable: true,
  enumerable: true,
  configurable: true
});

// Enumberate Properties
var txt = "";
for(var x in person1) {
  txt += person1[x] + "\n";
  console.log(txt);
}
console.log(person1);


// Create an Object:
var person2 = {
  firstName : "John",
  lastName  : "Doe",
  language  : "No"
};
console.log(person2);

// Change a Property:
Object.defineProperty(person2, "language", {
  value         : "EN",
  writable      : true,
  enumerable    : false,
  configurable  : true
});

// Enumberate Properties
var txt = "";
for(var x in person2) {
  txt += person2[x] + "\n";
}
console.log(person2);

/// Create an Object:
var pers = {
  firstName: "John",
  lastName : "Doe",
  language : "NO"
};
console.log(pers);

// Change a Property:
Object.defineProperty(pers, "language", {
  get : function() { return language },
  set : function(value) { language = value.toUpperCase()}
});

console.log(pers);
// Change Language
pers.language = "en";
console.log(pers.language);

var str = "HELLO WORLD";
console.log(str.charAt(0));      // returns H

var str = "HELLO WORLD";
console.log(str[6]);

var obj = { name: "John", new: "yes" };
console.log(obj.new);