console.log("Math.random() =", Math.random());
console.log(Math.floor(Math.random() * 10));   // returns a random integer from 0 to 9
console.log(Math.floor(Math.random() * 11));   // returns a random integer from 0 to 10
console.log(Math.floor(Math.random() * 100));   // returns a random integer from 0 to 99
console.log(Math.floor(Math.random() * 101));   // returns a random integer from 0 to 100
console.log(Math.floor(Math.random() * 10) + 1);   // returns a random integer from 0 to 10
console.log(Math.floor(Math.random() * 100) + 1);   // returns a random integer from 0 to 100

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRndInteger(20, 25));

function getRndInteger2(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRndInteger2(30, 35));