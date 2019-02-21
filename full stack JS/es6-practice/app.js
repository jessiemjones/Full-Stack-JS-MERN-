// let name = "John"
// const age = 101
// const pets = ["cat", "dog"]
// const petObjects = []

// function runForLoop() {
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         pet.name = name
//         petObjects.push(pet)
//         console.log(petObjects)
//     }
//     return name
// }
// // let name = "Fred"
// // console.log(runForLoop())

// //rewrite this as an arrow function:
// const carrots = ["bright orange", "ripe", "rotten"]


// const add = (a, b) => a + b;

// const double = num => num * 2;


// // var expense = {
// //     type: "Business",
// //     amount: "45 USD"
// // };
// // var type = expense.type
// // var amount = expense.type;

// // var {type, amount} = expense
// // console.log(type, amount);

// // //arrays

// // const vegetables = ["carrot", "tomat", "tomato soup"];

// // const [firstVegetable, second] = vegetables;

// // console.log(firstVegetable, second)


// // const people= [
// //     {name: "bob", age:31},
// //     {name: "bill", age:21},
// //     {name: "fred", age:42}
// // ]

// // const [{name}, ejjeej]= people

// // console.log(name)




// // // start lesson here
// // const points = [
// //     [4,5],
// //     [10,1],
// //     [0,40]
// // ]

// var final = points.map(point => {
//     return {
//         x: point[0],
//         y: point[1]
//     }
// })

// // this is same as above ^^^^
// var final = points.map(([x, y]) => {
//     return {
//         x: x,
//         y: y
//     }
// })

// // the x:x and y:y are redundant above
// var final = points.map(([x, y]) => ({
//     x,
//     y
// }));

// console.log(final)

// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// function filterForFriendly(arr) {
//     return arr.filter(function(person) {
//         return !!person.friendly
//     })
// }

// const filterForFriendly = arr => arr.filter(person => (!!person.friendly));
// console.log(filterForFriendly(people))

// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// };
// // // mapVegetables =>
// const mapVegetables = arr => arr.map(carrot => ({ type: "carrot", name: carrot}));
// // const mapVegetables = arr => arr.map(carrot )
// console.log(mapVegetables(carrots))


// const someArray = [{age: 22},
// {age: 'hello'},{age:30},
// {age: [20]}];

// let result = someArray.filter(function(val){
//     return val % 2 === 0;
// });
// function returnNum(val){
//     return typeof val.age === 'number';
// } 

// let result = someArray.filter(returnNum);


// function returnEven(val){
//     return val % 2 === 0;
// };
// let result = someArray.filter(returnEven(val){
//     return 
// });
// // console.log(result)

// function doMathSum(a, b) {
//     return a + b
// }

// const doMathSum = (a, b) => a + b

// var produceProduct = function (a, b) {
//     return a * b
// }

// const produceProduct = (a, b) => a * b


// Write a printString function that takes firstNme, lastName, and age as parameters and returns a string like the following.:
// Hi Kat Stark, how does it feel to be 40?
// fistName should default to "Jane"
// lastName should default to "Doe"
// age should default to 100

// const printString = (firstName = "Jane", lastName = "Doe", age = 100) => {
//     return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
// }
// console.log(printString("Kat","Stark", 40))

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
//  function filterForDogs(arr) {
//      return arr.filter(animal => {
//          if (animal.type === "dog") {
//              return true
//          } else {
//              return false
//          }
//      })
//  };
//  const filterForDogs = arr => arr.filter => animal 

//  const filterForDogs = arr => arr.filter(animal => animal.type === "dog" ? true : false)
// console.log(filterForDogs(animals))

// const printString = (firstName = "Jane", lastName = "Doe", age = 100) => {
//     return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
// }
// console.log(printString("Kat","Stark", 40))

// Hi Janice!

// Welcome to Hawaii. 

// I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.

const printString = (name, location) => {
    return `Hi ${name}! \n\nWelcome to ${location}. \n\nI hope you enjoy your stay. Please ask the president of ${location} if you need anything.`
}
console.log(printString("Janice", "Hawaii"))

// /// THIS IS DESTRUCTERING THE IMPORTING OF NPM PACKAGES!!  WE WILL USE THIS A SHITLOAD
// import {question, keyInSelect} from "readline-sync";

// question

// keyInSelect