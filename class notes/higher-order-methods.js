//Higher order functions
// Method - a built in funcion that is part of an object
//MOST higher order funcions are method

//for each

// var numbers = [1,2,3,4,5,6]

// var newArr = numbers.forEach(function(number){    //can put anything in the (), but best practice is to put a singlular of your variable
//     console.log(number + 4)
// })

// console.log(newArr)

// if you want to loop through and see what happens if you do something to each iteration.  Mainly for testing

map
var numbers = [1,2,3,4,5,6]
var newArr = numbers.map(function(number){
    return number * 2
})

console.log(newArr)

//MAP WILL BASICALLY REPLACE FOR LOOPS
//WEWILL USE MAPS ALOT.  LIKE, ALOT ALOT!!!

//filter
// var numbers = [12, 9, 143, 84, 4]
// var filteredArr = numbers.filter(function(number){
//     return number < 100             //need to return a condition (must be  something that will be true or false)
// })

// console.log(filteredArr)

//find

// var numbers = [12, 30, 5, 62, 18, 53]

// numbers.find(function(number){
//     return number > 456
// })

// only returns the first value that meets the condition
