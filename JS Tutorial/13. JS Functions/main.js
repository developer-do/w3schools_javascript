function add(a, b) {
  return a + b;
}
/* var a1 = 50;
var a2 = 3.1;
var a3 = 5;  
function foo(a1, a2, a3) {
  
};



function foo(){
  return arguments[0] + arguments[1] + arguments[2];
}
console.log(foo());
 */

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit - 32);
}
document.getElementById("demo1").innerHTML = toCelsius(77);