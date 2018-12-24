var x = myFunction();

function myFunction(){
  return this;
}
console.log(x);

var myObject = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
console.log(myObject.fullName());
