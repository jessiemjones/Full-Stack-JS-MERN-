// #1: Write a function that accepts two numbers as parameters, and returns the sum.


// function sumOfTwoNumbers(num, otherNum){
//     return (num += otherNum)
// }
// console.log(sumOfTwoNumbers(5,10))


// #2: Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

// Here is the funciton that I initially came up with..
// It uses an if/elseif/else statement to compare the parameters between eachother.
// I later found a better/shorter way to get the same results.
// function returnsLargestNumber(x, y, z){
//     if (x > (y && z)){
//         return(x)
//     }
//     else if (y > (x && z)){
//         return(y)
//     }
//     else{
//         return(z)
//     }
// }
// console.log(returnsLargestNumber(10,2,3))

// Here I have an alternative function to produce the same results as above.
// Just uses a Math.max method
// function returnLargest(r,t,u){
//     console.log(Math.max(r,t,u));
// }
// returnLargest(2,555,77)

// #3: Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");

// This function takes the variable (myNum) and checks to see if the modulus is even or odd and returns the result.
// It only works with whole numbers.  "10.2" for example would not work.  It would need a rounding function (like Math.round)
// var myNum = 10
// function isEvenOdd(myNum){
//     if (myNum % 2 === 0){
//         return (myNum + " is even")
//     }
//     else if (myNum % 2 !=== 0){
//         return (myNum + " is odd")
//     } 
// }
// console.log(isEvenOdd(myNum))

//#4: Write a function that accepts a string as a parameter. 
//    If the length of the string is less than or equal to twenty characters long, 
//    return the string concatenated with itself (string + string). 
//    If the string is more than twenty characters long, return the first half of the string.
// 


function concatStrings(str){
    if(str.length <= 20){
        return str.concat(str);
    }else if (str.length > 20){
        return str.slice(0, Math.floor(str.length /2));
    }
}
console.log(concatStrings("This is the answer to problem number 4 "))






