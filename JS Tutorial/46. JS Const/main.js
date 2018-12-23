var x = 10;
console.log(x);
{
  const x = 2;
  console.log(x);
}
console.log(x);

const car = {type:"Fiat", model:"500", color:"white"};
car.color = "red";
car.owner = "Johnson";
console.log(car);


const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Toyota";
cars.push("Audi");
console.log(cars);


carName = "Volvo";    // You CAN use carName here

var carName;
console.log(carName);