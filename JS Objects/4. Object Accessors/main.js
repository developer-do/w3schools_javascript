var person = {
  firstName : "John",
  lastName  : "Doe",
  language  : "en",
  get lang() {
    return this.language;
  },
  set lang(value) {
    this.language = value;
  }
}

console.log(person.lang);
console.log(person);
console.log(person.lang = "ko");
console.log(person);

var obj = {
  counter : 0,
  get reset() {
    this.counter = 0;
  },
  get increment() {
    this.counter++;
  },
  get decrement() {
    this.counter--;
  },
  set add(value) {
    this.counter += value;
  },
  set subtract(value) {
    this.counter -= value;
  }
}

obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;
console.log(obj.counter);

// Define object
var obj2 = {counter : 0};
// Define setters
Object.defineProperty(obj2, "reset", {
  get: function () {
    this.counter = 0;
  }
});
Object.defineProperty(obj2, "increment", {
  get: function () {
    this.counter++
  }
});
Object.defineProperty(obj2, "decrement", {
  get: function () {
    this.counter--;
  }
});
Object.defineProperty(obj2, "add", {
  set: function (value) {
    this.counter += value;
  }
});
Object.defineProperty(obj2, "subtract", {
  set: function (value) {
    this.counter -= value;
  }
});
obj2.reset;
obj2.add = 5;
obj2.subtract = 1;
obj2.increment;
obj2.decrement;
console.log(obj2);