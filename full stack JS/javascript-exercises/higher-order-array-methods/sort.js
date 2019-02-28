// 1) Sort an array from smallest number to largest

// var toBeSorted = [1, 3, 5, 2, 90, 20]

// var sorted = toBeSorted.sort(function(a,b){
//     return a - b
// })
// console.log(sorted)

// 2) Sort an array from largest number to smallest
// var sorted = toBeSorted.sort(function(a,b){
//     return b - a
// })

// 3) Sort an array from shortest string to longest
var lengthSort = ["dog", "wolf", "by", "family", "eaten"];
var sorted = lengthSort.sort(function(a,b){
    return b.length - a.length

})

console.log(sorted)

// 4) Sort an array alphabetically
// console.log(lengthSort.sort())

// // 5) Sort the objects in the array by age
// var myArr = [
//     {
//         name: "Quiet Samurai",
//         age: 22
//     },
//     {
//         name: "Arrogant Ambassador",
//         age: 100
//     },
//     {
//         name: "Misunderstood Observer",
//         age: 2
//     },
//     {
//         name: "Unlucky Swami",
//         age: 77
//     }
// ]
// // var agesOnly = myArr.map(function(person){
// //     return person.age
// // })
// var sortedByAge = myArr.sort(function(a, b){
//     return a.age - b.age
// })

// console.log(sortedByAge)