var person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

var person1 = {
  firstName: "John",
  lastName: "Doe"
};

var person2 = {
  firstName: "Mary",
  lastName: "Doe"
};

console.log(person.fullName.call(person1));
console.log(person.fullName.call(person2));


var per = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
var pers = {
  firstName: "John",
  lastName: "Doe"
}
console.log(per.fullName.call(pers, "gangwondo", "Korea"));