const numbers = [55, 506, 2300, 11, 346, 3, 5.5];

let maximumNumber= numbers[0];

for(let x=0; x<numbers.length;x++){

if(maximumNumber<numbers[x])

maximumNumber=numbers[x];

}

console.log(`Maximum number in this array is ${maximumNumber}`)