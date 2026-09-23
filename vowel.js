let input = process.argv.slice(2).join(" ");

function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (var i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

console.log("Original string:", input);
console.log("Vowel count:", countVowels(input));
