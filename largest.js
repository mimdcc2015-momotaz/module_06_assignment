let number1 = Number(process.argv[2]);
let number2 = Number(process.argv[3]);
let number3 = Number(process.argv[4]);

console.log("the number1 : " + number1);
console.log("the number2 : " + number2);
console.log("the number3 : " + number3);

function largest(a, b, c) {
    if (a >= b && a >= c) {
        return "Number1 = " + a + " is the largest.";
    } else if (b >= a && b >= c) {
        return "Number2 = " + b + " is the largest.";
    } else {
        return "Number3 = " + c + " is the largest.";
    }
}

let result = largest(number1, number2, number3);
console.log(result);
