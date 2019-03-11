//1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

// var myArr = [3, 6, 8, 2]
// var fiveAndGreaterOnly = myArr.filter(function(number){
//     return number >= 5;
// })
// console.log(fiveAndGreaterOnly)


//2) Given an array of numbers, return a new array that only includes the even numbers.

// var myArr = [3, 6, 8, 2]
// var evensOnly = myArr.filter(function(number){
//     return number % 2 === 0
// })
// console.log(evensOnly)

// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

// var myArr = ["dog", "wolf", "by", "family", "eaten", "camping"]
// var fiveCharOrFewer = myArr.filter(function(string){
//     return string.length <= 5
// })

// console.log(fiveCharOrFewer)

// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

// var illuminatiPeople = [
//     {
//         name: "Angelina Jolie",
//         member: true
//     },
//     {
//         name: "Eric Jones",
//         member: false
//     },
//     {
//         name: "Paris Hilton",
//         member: true
//     },
//     {
//         name: "Kayne West",
//         member: false
//     },
//     {
//         name: "Bob Ziroll",
//         member: true
//     }
// ]

// var filterdPeople = illuminatiPeople.filter(function(person){
//     return person.member === true;
// })
// console.log(filterdPeople)

// 5) Filter out all the people who are not old enough to see The Matrix (younger than 18)
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

var notOldNuff = myArr.filter(function(person){
    return person.age >= 18;
})
console.log(notOldNuff)