const num1 = 234;

function isPalindrome(num2){
    let reverseOfANumber=0;
    while(num2 > 0){
        let remainder=num2%10;
        let quotient=Math.floor(num2/10);
        reverseOfANumber=reverseOfANumber*10+remainder;
        num2=quotient;
    }

    (reverseOfANumber === num1)? console.log(`${num1} is Palindrom Number`) :  console.log (`${num1}  is not a Palidrome Number`)

}
isPalindrome(num1);