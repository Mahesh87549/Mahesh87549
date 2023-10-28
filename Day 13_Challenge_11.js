//Write a JS function to findout the largest element in an array
const arr = [15, 26, 9, 876, 999, 67, 8765];
let maximumNumber = arr[0];
for(let i=1; i<arr.length; i++){
    if(arr[i]>maximumNumber)
    maximumNumber = arr[i];
}
console.log(`The Maximum Number in the given array is ${maximumNumber}`);

 




