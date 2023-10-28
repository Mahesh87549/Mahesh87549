//Create a program that prints the Fibonacci sequence up to a given number
//31-10-2023

const limit = 15;

let firstNumber = 0, secondNumber = 1;

let arr = [];

arr[0] = firstNumber;

arr[1] = secondNumber;

arr[2] = firstNumber + secondNumber;

let i=1;

while(arr[i+1]<limit){
    i = i+1;
arr[i+1] = arr[i] + arr[i-1];
}
let j =0 ;
while(arr[j]<limit){
    console.log(arr[j]);
    j++;
}

