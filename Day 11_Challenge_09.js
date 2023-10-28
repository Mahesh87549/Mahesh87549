function isPalindrome(input){
    const len = input.length;
    for(let i=0; i<(Math.floor(len/2)); i++){
 
        if(input[i] !== input[(len-i)-1]){
            console.log(`${input} is not a palindrom string`);
            return;
        }       
    }
    console.log(`${input} is a palindrom string`);
    }
isPalindrome('Madam');
    
 




