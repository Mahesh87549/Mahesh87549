//Implement a function to remove the duplicates of an array
//27-10-2023
const arr = [15, 25, 2, 10, 15, 0, 22, 6, 11, 15];
function removeDuplicates(input) {
    let consolidatedArray = [];
    for (let i = 0; i < input.length; i++) {
        if (consolidatedArray.indexOf(input[i]) === -1) {
            consolidatedArray.push(input[i]);
        }
    }
    return consolidatedArray;
}

const result = removeDuplicates(arr);
console.log(`The sorted array without duplicates is ${result}`);

