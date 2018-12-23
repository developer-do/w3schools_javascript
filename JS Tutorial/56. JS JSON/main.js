var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

var obj = JSON.parse(text);
console.log(obj);

var person = {
  fullName : function () {
    return this.firstName + " " + this.lastName;
  }
};

person.fullName.apply(obj[0]);
var i = 0;
for (i = 0; i < obj.employees.length; i++) {
  console.log(person.fullName.apply(obj.employees[i]));
}
