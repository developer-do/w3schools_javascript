function func1 (x, y) {
  if(y === undefined) {
    y = 0;
  }
  if(x === undefined) {
    x = 0;
  }
  return x + y;
}
console.log(func1(1, 5));



x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  var i;
  var max = -Infinity;
  for(i = 0; i < arguments.length; i++) {
    if(arguments[i] > max) {
      max = arguments[i];
      console.log(max);
    }
  }
  return max;
}
console.log(x);

x = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
  var i;
  var sum = 0;
  for(i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(x);