let celsius = Number(process.argv[2]);

console.log("the number : "+ celsius);

function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

const fahrenheit = celsiusToFahrenheit(celsius);
console.log("The given number in Fahrenheit is : " + fahrenheit);