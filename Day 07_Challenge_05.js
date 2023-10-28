const swapTwoValues = function(num1, num2){
    num1=num1+num2;
    num2=num1-num2;
    num1=num1-num2;
    return [num1,num2];
}

let [num1, num2] = swapTwoValues(8,9);
console.log(num1, +'  '+num2); 