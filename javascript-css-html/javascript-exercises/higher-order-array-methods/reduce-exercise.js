// var numbers = [1,2,3]

// var total = numbers.reduce(function(number, fuckinSomethinElse){
//     return number + fuckinSomethinElse
// })
// console.log(total);


// var numbers = [1,2,3]

// var total = numbers.reduce(function(number, fuckinSomethinElse){
//     var fuck = number + fuckinSomethinElse
//     return fuck.toString()
// },0)
// console.log(total)


// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ]
// var count = 0;
// var howManyVotes = voters.filter(function(person){
//     if (person.voted){
//         count++
//     }
// })
// console.log(count)


// // 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
// var wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ]

// var totalCost = wishlist.reduce(function(acc, cur){
//     return acc + cur.price
// },0)

// console.log(totalCost)


// 5) Given an array of arrays, flatten them into a single array
// var arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ]

// var flattened = arrays.reduce(function(acc, cur){
//     return acc.concat(cur)
// })
// console.log(flattened)





