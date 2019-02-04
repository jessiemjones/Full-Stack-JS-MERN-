// Write an if statement that prints "is greater than" if 5 is greater than 3
// Write an if statement that prints "is the length" if the length of "cat" is 3
// Write an if/else statement that checks if "cat" is equal to "dog" and prints, "not the same" when they are not equal.

// if (5 > 3){
//     console.log("is greater than")
// }

// var myString = "cat"
// if (myString.length === 3){
//     console.log("is the length")
// }

// if ("cat" === "dog"){
//     console.log("is the same")
// }else{
//     console.log("is NOT the same")
// }

// var person = {
//     name: "Bobby",
//     age: 12
//   }

// if (person.age > 18){
//     console.log(person.name + " is allowed to go to the movie")
// }else{
//     console.log(person.name + " is not old enough.")
// }  

// // if (person.name.startsWith("B")){
// //     console.log(person.name + " is allowed")
// // }else{
//     console.log(person.name + " is NOT allowed into the movie")
// }

// if (person.name.startsWith("B") & (person.age >= 18)){
//     console.log(person.name + " is allowed to go to the movies")
// }else{
//     console.log(person.name + " is NOT allowed into the movie")
// }


// SILVER MEDAL
// #1: Write an if/else if/else statement that prints "strict" if 1 strictly equals "1", 
//     prints "loose" or "abstract" if 1 equals "1" without type checking, 
//     and prints "not equal at all" if it doesn't print the other stuff.
// #2: Write an if statement that prints "yes" if 1 is less than or equal to 2 and 2 is equal to 4


// #1: Write an if/else if/else statement that prints "strict" if 1 strictly equals "1", 
//     prints "loose" or "abstract" if 1 equals "1" without type checking, 
//     and prints "not equal at all" if it doesn't print the other stuff.

// I feel like this code is pretty self explanatory
// if (1 === "1"){
//     console.log("strict")
// }
// else if (1 == "1"){
//     console.log("loose")
// }
// else{
//     console.log("not equal at all")
// }

// #2: Write an if statement that prints "yes" if 1 is less than or equal to 2 AND (&&) 2 is equal to 4
// if (1 <= 2 && 2 == 4){
//     console.log("yes")
// }

// GOLD MEDAL

// #1:  Write an if statement that checks to see if "dog" is a string
// I'm going to try to use an if statement with an indexOf() funciton to determine the type and log "true"if the return is 'string'
// var str = true

// if (typeof(str) === 'string'){
//     console.log(true);
// }else{
//     console.log(false);
// }

// #2: Write an if statement that checks to see if "true" is a boolean
// var myBoolean = "true"
// if (typeof(myBoolean) === 'boolean'){
//     console.log(true);
// }else{
//     console.log(false)
// }

// #3:  Write an if statement that checks to see if a variable has been defined or not

