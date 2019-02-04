var ask = require("readline-sync");

var fName = ask.question("What is your first name?: ")
var lName = ask.question("And what is your last name? ")
var age = ask.questionInt("What is your age?: ")
var color = ask.question("What is your favorite color?: ")
var height = ask.questionInt("What is your height (in cm)?: ")
var longMessage = ask.question("Tell me a story: ")

console.log("Your name is: " + fName.toUpperCase()+ " " +lName.toUpperCase())
console.log("Your age is: " + age)
console.log("Your fav color is: " + color, color.length)
console.log("Your height is (in CM): " + height)
if (longMessage.length > 20){
    console.log("I have shortened your story:" + (longMessage.slice(0, longMessage.length /2)))
    console.log("Here is your original story: " + longMessage)
    var userChangeMessage = ask.questionInt(`tell me where to split the story (enter a number less then ${longMessage.length-1}): `)
    console.log("Here is your shorter story: " + (longMessage.slice(0, userChangeMessage)))

}else if(longMessage.length < 20){
    console.log(longMessage)
}









// response = true


// while(response){
//     var response = ask.keyInYN("Should I keep asking this question?")
// }


// console.log(response)