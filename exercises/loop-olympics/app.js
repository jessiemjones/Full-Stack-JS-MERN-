// Preliminaries
// 1 .Write a for loop that prints to the console the numbers 0 through 9.
// 2.Write a for loop that prints to the console 9 through 0.
// 3. Write a for loop that prints these fruits to the console.
// var fruit = ["banana", "orange", "apple", "kiwi"]

//1. for (i = 0; i < 10; i ++) {
//     console.log(i)
// }

// 2. for (i = 9; i >= 0; i--) {
//     console.log(i)
// }

// 3. var fruit = ["banana", "orange", "apple", "kiwi"]
// for (var i = 0; i < fruit.length; i++){
//     console.log(fruit[i])
// }

// Bronze Medal
// 1. Write a for loop that will push the numbers 0 through 9 to an array.

// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// for (var i = 0; i < 10; i++){
//     fruit.push(i)
// }
// console.log(fruit)

// 2. Write a for loop that prints to the console only even numbers 0 through 100.
// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// for (var i = 0; i < 10; i++){
//     fruit.push(i)
//     console.log(fruit)
// }

// 3. Write a for loop that will push every other fruit to an array.
// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// for (var i = 0; i < 101; i++){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }
// var myArray = []
// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// for (var i = 0; i < fruit.length; i += 2){
//     myArray.push(fruit[i])
// }
// console.log(myArray)

//Silver Medal
// 1.Write a loop that will print out all the names of the people of the people array
// 2.Write a loop that pushes the names into a names array, and the occupations into an occupations array.
// 3.Write a loop that pushes every other name to an array starting with "Harrison Ford", 
//   and every other occupation to another array starting with "Singer".

// Here is the base array that will be used for Silver Medal
var peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]
// #1 Here is my code for problem #1.  It prints out the names from the array.
// for(var i = 0; i < peopleArray.length; i ++){
//     console.log(peopleArray[i].name)
// }

//#2 Write a loop that pushes the names into a names array, and the occupations into an occupations array.
// I initialized two new empty arrays (namesArray, and occupationsArray).  I then used a for loop with a push method to push the elements into their respective arrays.
//
// var namesArray = []
// var occupationsArray = []
// for (var i = 0; i < peopleArray.length; i ++){
//     namesArray.push(peopleArray[i].name)
//     occupationsArray.push(peopleArray[i].occupation)
//     //The syntax is: nameOfEmptyArray.pushMethod(nameOfArrayToBePushedFrom[the index to push from].theproperty to be pushed)
// }
// console.log(namesArray)
// console.log(occupationsArray)

// 3.Write a loop that pushes every other name to an array starting with "Harrison Ford", 


