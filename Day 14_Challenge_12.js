//Create a function that finds the maximum of three numbers
// Topic:Functions and Scope

// function findMaximumOfThreeNumbers(num1, num2, num3){

//     (num1 > num2) ? ((num1 > num3) ? console.log(`${num1} is greater among the given three values.`) :console.log(`${num3} is greater among given three values`) ) : ((num2 > num3) ? console.log(`${num2} is greater among the given three values.`) :console.log(`${num3} is greater among the given three values.`) );

// }

function findMaximumOfThreeNumbers(num1, num2, num3){

    let maximumNumber = num1;
    if(num2 > num1)
    maximumNumber = num2;
    else if(num3 > num1)
    maximumNumber = num3;

    console.log(`${maximumNumber} is the greate among the given numbers`);
}


findMaximumOfThreeNumbers (100,22,600);

 




