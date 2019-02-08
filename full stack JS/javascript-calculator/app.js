// FUNCITON THAT adds 2 numbers and returns the result 
//

var ask = require("readline-sync")

// var options = ["add", "multiply", "divide", "subtract"];
// var response = ask.keyInSelect(options)

function calculator(){
var firstNum = ask.questionInt("Please enter a number: ");
var secondNum = ask.questionInt("Please enter a second number: ");
console.log("You entered " + firstNum + " and " + secondNum + " what would you like me to do with them?");
var options = ["add", "multiply", "divide", "subtract"];
var response = ask.keyInSelect(options)
var add = firstNum + secondNum
var multiply = firstNum * secondNum
var divide = firstNum / secondNum
var subtract = firstNum - secondNum
var again = ask.keyInYN("Would you like to try another operation?")


switch (response){
    case 0 :
        console.log("OK.  I will add these numbers for you...")
        console.log(add)
        console.log(calculator())
        break
    case 1 :
        console.log("OK.  I will multiply these numbers for you...")
        console.log(multiply)
        console.log(calculator())
        break;
    case 2 :
        console.log("OK.  I will divide these numbers for you...")
        console.log(divide)
        console.log(calculator())
        break;
    case 3 :
        console.log("OK.  I will subtract these numbers for you...")
        console.log(subtract)
        console.log(calculator())
        break;    
    default :
        console.log("We are having some technical difficulties.. Please try again..")  
}}

console.log(calculator())
