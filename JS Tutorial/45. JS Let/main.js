var x = 10;
console.log(x);
{
  var x = 2;
  console.log(x);
}
console.log(x);

var y = 10;
console.log(y);
{
  let y = 2;
  console.log(y);
}
console.log(y);


var i = 5;
for (var i = 0; i < 10; i++) {
  console.log("for문의 i =", i);
}
console.log("for문 나와서의 i = ", i);

let i2 = 5;
for (let i2 = 0; i2 < 10; i2++) {
  console.log("for문의 i2 =", i2);
}
console.log("for문 나와서의 i2 = ", i2);

