const number = 333;
let sum2 = calculateSumOfTheDigits(number);
while(sum2 > 9){

    sum2 = calculateSumOfTheDigits(sum2);

   }
console.log(`Final Sum ${sum2}`)

function calculateSumOfTheDigits(number){
let sum = 0;
while(number>0){
let remainder = number%10;
let quotient = Math.floor(number/10);
sum = sum+remainder;
number = quotient;
}
return sum;
}







