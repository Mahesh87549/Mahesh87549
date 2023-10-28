//Implement a function that finds average of array elements.
//30-10-2023

let arr = [];
arr[0] = 4;
arr[1] = 4;
arr[2] = 4;

let average = 0;

function findAverage(arr){

    let numberOfElements = arr.length;

    console.log(numberOfElements);
     
    for(let i of arr){
        average=average+i;
    }

    average=average/numberOfElements;

    return average;

}
let result = findAverage(arr);

console.log(result);