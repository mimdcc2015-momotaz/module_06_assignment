let number = Number(process.argv[2]);

console.log("the number : "+ number);
function factorial(n) {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers.");
  }
  
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
const fact = factorial(number);
console.log("The factorial of " + number + " is: " + fact);