let input = process.argv.slice(2);

function removeDuplicates(arr) {
    let uniqueArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

let result = removeDuplicates(input);
console.log("Unique array:", result);
