function func1() {
  var a = 4;
  return a * a;
}
console.log("func1() =",func1());

var a = 4;
function func2() {
  return a * a;
}
console.log("func2() =", func2());

// Initiate counter
var counter = 0;

// Function to increment counter
function add() {
  counter += 1;
}

// Call add() 3 times
add();
add();
add();




console.log("counter =", counter);

// The counter should now be 3
/********************/
// Initiate counter
var counter1 = 0;

// Function to increment counter
function add1() {
  var counter1 = 0;
  counter1 += 1;
}

// Call add() 3 times
add1();
add1();
add1();

console.log("counter1 =",counter1);

// The counter should now be 3. But it is 0



// Function to increment counter
function add2() {
  var counter2 = 0;
  counter2 += 1;
  return counter2;
}

// Call add() 3 times
add2();
add2();
add2();
console.log(add2());
// The counter should now be 3. But it is 1.


function add3() {
  var counter = 0;
  function plus() {
    counter += 1;
  }
  plus();
  return counter;
}

add3();
add3();
add3();
console.log(add3());

var add4 = (function(){
  var counter5 = 0;
  console.log("84 Line =",counter5);
  return function() {
    counter5 += 1;
    console.log("87 Line =",counter5);
    return counter5;
  }
})();

add4();
add4();
add4();
add4();

console.log(add4());


let ab = 3;
const f = () => { console.log(ab); };
f();
