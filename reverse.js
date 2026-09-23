let input = process.argv[2];
console.log("Original string:", input);

let reversed = input.split("").reverse().join("");
console.log("Reversed string:", reversed);
