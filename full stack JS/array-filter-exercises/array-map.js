// 1) Make an array of numbers that are doubles of the first array

// var singleNumbers = [2, 5, 100]
// var doubleNumbers = singleNumbers.map(function(number){
//     return number * 2
// })

// console.log(doubleNumbers)


// 2) Take an array of numbers and make them strings

// var arr = [2,5,100]
// var stringItUp = arr.map(function(string){
//     return string.toString()
// })
// console.log(stringItUp)


// //3) Capitalize each of an array of names
// var lowercase = ["john", "JACOB", "jinGleHeimer", "schmidt"]
// var capitalized = lowercase.map(function(array){
//     return array[0].toUpperCase() + array.slice(1, array.length).toLowerCase()
// })
// console.log(capitalized)

//4) Make an array of strings of the names

// maybe use filter 


// console.log(names)
// var namesOnly = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]
// // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
// var names = namesOnly.map(function(person){
//     console.log(person.name)
// })

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix


var myArr = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

// var oldNuff = myArr.map(function(person){
//     if (person.age > 18)
//     console.log(person.name)


// })
// console.log(oldNuff)

var forDom = myArr.map(function(person){
    return `<h1>${person.name}</h1><h2>${person.age}</h2>` 
})
console.log(forDom)