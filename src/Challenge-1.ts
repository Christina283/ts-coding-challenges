// 1. FizzBuzz Variant (Easy)
//Write a function that takes a number n and returns an array of strings from 1 to n. 
// For multiples of 3, use "Fizz"; multiples of 5, use "Buzz"; multiples of both, use "FizzBuzz"; 
// // otherwise, the number as a string.

function fizzBuzzVariant(n : number) : string[] {
    let a : string[] = [];
    let strToPush : string;
    for (let i = 1; i <=n; i++) {
        strToPush = '';
        if(i%15 === 0)
            strToPush = "FizzBuzz"   
        else if (i%5 === 0)
            strToPush = "Buzz"
        else if (i%3 === 0)
            strToPush = "Fizz";
        else
            strToPush = i.toString();
        a.push(strToPush);
    }
    return a;
}

console.log(fizzBuzzVariant(15));