const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Your code below

const double = numbers.map((number) => {
  return number * 2;
});
console.log(double);

const divide = numbers.map((number) => {
  return number / 2;
});
console.log(divide);

const multiply = numbers.map((number) => {
  return number * number;
});
console.log(multiply);
