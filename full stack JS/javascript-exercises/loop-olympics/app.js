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

// // 2. Write a for loop that prints to the console only even numbers 0 through 100.
// for (var i = 0; i <= 100; i++){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }

// 3. Write a for loop that will push every other fruit to an array.
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
// var peopleArray = [
//   {
//     name: "Harrison Ford",
//     occupation: "Actor"
//   },
//   {
//     name: "Justin Bieber",
//     occupation: "Singer"
//   },
//   {
//     name: "Vladimir Putin",
//     occupation: "Politician"
//   },
//   {
//     name: "Oprah",
//     occupation: "Entertainer"
//   }
// ]
// // // #1 Here is my code for problem #1.  It prints out the names from the array.
// // // for(var i = 0; i < peopleArray.length; i ++){
// // //     console.log(peopleArray[i].name)
// // // }

// // //#2 Write a loop that pushes the names into a names array, and the occupations into an occupations array.
// // // I initialized two new empty arrays (namesArray, and occupationsArray).  I then used a for loop with a push method to push the elements into their respective arrays.
// // //
// // // var namesArray = []
// // // var occupationsArray = []
// // // for (var i = 0; i < peopleArray.length; i ++){
// // //     namesArray.push(peopleArray[i].name)
// // //     occupationsArray.push(peopleArray[i].occupation)
// // //     //The syntax is: nameOfEmptyArray.pushMethod(nameOfArrayToBePushedFrom[the index to push from].theproperty to be pushed)
// // // }
// // // console.log(namesArray)
// // // console.log(occupationsArray)

// // // #3.a:Write a loop that pushes every other name to an array starting with "Harrison Ford", 
// // 3.b: and every other occupation to another array starting with "Singer".

// // Here I have initialized 2 empty arrays that will have have the proerty values pushed into them.
// var everyOtherName = []
// var everyOtherOccupation = []
// // Here is my for loop
// for (var i = 0; i < peopleArray.length; i += 2){
// // Pretty standard except I use "i += 2" in order to push every other value   
//     everyOtherName.push(peopleArray[i].name)
//     everyOtherOccupation.push(peopleArray[i + 1].occupation)
//     //I use "i + 1" so that it pushes from the second object in "peopleArray" (as per 3.b)
// }
// console.log(everyOtherName, everyOtherOccupation)


// GOLD MEDAL:
// #1: Create an array that mimics a grid like the following using for loops:
// #2: Create an array that mimics a grid like the following using for loops:
// #3: Create an array that mimics a grid like the following using for loops:
// #4: Given a grid like the previous ones, write a for loop that would change every number to an x.


// #1: Create an array that mimics a grid like the following using for loops:
// [[0, 0, 0], 
// [0, 0, 0], 
// [0, 0, 0]]

var matrix = []

for(var i = 0; i < 3;i++){
  matrix.push([])
  for(var a = 0; a < 3;a++){
    matrix[i].push(0)
  }
}
console.log(matrix)

//
// matrix = [[0,0,0],[0,0,0],[0,0,0]]





