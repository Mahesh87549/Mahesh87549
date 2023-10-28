function calculateFactorial(number){

    if (Number.isInteger(number)){
        let factorialValue=number;
        for(let i=number-1; i>1; i=i-1){
        factorialValue*=(i);
        }
        return factorialValue;
    }
    else if (typeof(number) === 'undefined')
    console.log(`Factorial concept cannot applied for undefiend value type`);
    else
    console.log(`Please enter a number`);

}
    
let result = calculateFactorial(5);
console.log(`The factorial of a given number is ${result}`);

