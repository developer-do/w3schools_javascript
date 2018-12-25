var person = {
  fullName: function(){
    return this.firstName + " " + this.lastName;
  }
}
var person1 = {
  firstName : "Mary",
  lastName : "Doe"
}
console.log(person.fullName.apply(person1)); // Will return "Mary Doe";


var per = {
  fullName : function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
var per1 = {
  firstName: "John",
  lastName: "Doe"
}
console.log(per.fullName.apply(per1, ["app", "ly"]));
console.log(per.fullName.call(per1, "ca", "ll"));

console.log(Math.max(1, 2, 3));

console.log(Math.max.apply(null, [1,2,3]));