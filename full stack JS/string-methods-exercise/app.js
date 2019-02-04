// #1: Make a function that will return any given string into all caps followed by the same string all lowercase.

// capilizeAndLowercase("Hello") // => "HELLOhello"
// var myString = "Jessie is the best! " <<<<<WE DONT NEED THIS
// function capilizeAndLowercase(myString){
//     return (myString.toUpperCase()+ myString.toLowerCase());
// }
// console.log(capilizeAndLowercase("Jessie is the best! "))

// #2: Make a function that returns a number half the length, and rounded down. 
//     You'll need to use Math.floor().
// findMiddleIndex("Hello") // => 2
// findMiddleIndex("Hello World") // => 5

// This function bellow is a very long way to go about returning half the length rounded down.
// function findMiddleIndex(str) {
//     var length =str.length;
//     var half = length / 2;
//     var resultFloored = Math.floor(half);
//     return resultFloored;
//  }

//This funciton is much much cleaner and quicker, but just harder think of:
//  function findMiddleIndex(str){
    // return Math.floor(str.length / 2);
//  }

// console.log(findMiddleIndex("Hello"))
// console.log(findMiddleIndex("Hello world"))

// #3: Make a function that uses slice() and the other functions you've written to return the first half of the string
// function firstHalfReturn(str){
//     return str.slice(0, Math.floor(str.length / 2));

// }
// console.log(firstHalfReturn("supa string and other"))


// #4: Make a function that takes a string and returns that string where the first half is capitalized, 
// and the second half is lower cased. (If the string length is odd, capitalize the shorter of the first half.)
//capilizeAndLowercase("Hello") // => "HEllo"
// capilizeAndLowercase("Hello World") // => "HELLO world"

// use the function from problem #3 to get the first half followed by changing the slice parameters around to start the slice from the middle and using "-1" to finish at the end:
function firstHalfReturn(str){
    return  str.slice(0, Math.floor(str.length / 2)).toUpperCase() + str.slice(Math.floor(str.length / 2, -1)).toLowerCase();
    ;
}

console.log(firstHalfReturn("supa string djkfkjdjkdfjkdfand other"))


// then use this to get the first half upper case:
// use toUpperCase()







