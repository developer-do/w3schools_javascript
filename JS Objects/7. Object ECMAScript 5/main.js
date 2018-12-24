var person = {
  firstName : "John",
  lastName  : "Doe",
  language  : "EN"
};
console.log(person);
Object.defineProperty(person, "language", { value: "No" });
console.log(person);

var person1 = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

Object.defineProperty(person1, "language", { enumerable: false });
console.log(Object.keys(person1));
console.log(Object.getOwnPropertyNames(person1));   // Returns an array of properties

var person2 = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

Object.defineProperty(person2, "year", { value: "2008" });
console.log(person2);

var person3 = {
  firstName: "John",
  lastName : "Doe"
};

Object.defineProperty(person3, "fullName", {
  get: function(){
    return this.firstName + " " + this.lastName;
  }
});
console.log(person3.fullName);

// Define object
var obj = { counter: 0 };
console.log(obj.counter);

// Define setters
Object.defineProperty(obj, "reset", {
  get: function () {
    this.counter = 0;
  }
});
Object.defineProperty(obj, "increment", {
  get: function () {
    this.counter++;
  }
});
Object.defineProperty(obj, "decrement", {
  get: function () {
    this.counter--;
  }
});
Object.defineProperty(obj, "add", {
  set: function (value) {
    this.counter += value;
  }
});
Object.defineProperty(obj, "subtract", {
  set: function (value) {
    this.counter -= value;
  }
});

// Play with the counter:
obj.reset;
console.log("1 =",obj.counter);
obj.add = 5;
console.log("2 =", obj.counter);
obj.subtract = 3;
console.log("3 =", obj.counter);
obj.increment;
console.log("4 =", obj.counter);
obj.decrement;
console.log("5 =",obj.counter);
