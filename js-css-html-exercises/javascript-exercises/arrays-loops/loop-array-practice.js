// LOOPS AND ARRAYS PRACTICE
// #1
// Loop through the following array and count how many "computers" there are. Log the final count:
// var count = 0;
// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
// for (var i = 0; i < officeItems.length; i ++){
//     if (officeItems[i] == "computer"){
//         count++;
//     }
// }
// console.log(count)

//#2
//Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.
// var peopleWhoWantToSeeMadMaxFuryRoad = [
//     {
//       name: "Mike",
//       age: 12,
//       gender: "male"
//     },{
//       name: "Madeline",
//       age: 80,
//       gender: "female"
//     },{
//       name: "Cheryl",
//       age: 22,
//       gender: "female"
//     },{
//       name: "Sam",
//       age: 30,
//       gender: "male"
//     },{
//       name: "Suzy",
//       age: 4,
//       gender: "female"
//     }
//   ]
//   for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i ++){
//     if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18){
//       console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough")
//     }else{
//       console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough")
//     }
//   }

// LOOPS AND ARRAYS PRACTICE
// #1
// Loop through the following array and count how many "computers" there are. Log the final count:
// var count = 0;
// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
// for (var i = 0; i < officeItems.length; i ++){
//     if (officeItems[i] == "computer"){
//         count++;
//     }
// }
// console.log(count)

//#2
//Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.
// var peopleWhoWantToSeeMadMaxFuryRoad = [
//     {
//       name: "Mike",
//       age: 12,
//       gender: "male"
//     },{
//       name: "Madeline",
//       age: 80,
//       gender: "female"
//     },{
//       name: "Cheryl",
//       age: 22,
//       gender: "female"
//     },{
//       name: "Sam",
//       age: 30,
//       gender: "male"
//     },{
//       name: "Suzy",
//       age: 4,
//       gender: "female"
//     }
//   ]
//   for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i ++){
//     if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18){
//       console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough")
//     }else{
//       console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough")
//     }
//   }

// When we see an array the first thing to think about doing is likely a for loop and and if statement.
//Optional Bonus challenge
// Imagine you have a button that toggles a light on and off. 
// Loop through the following array of numbers and toggle the button the numbers of times for each number. 
// The array [2, 3, 2] would toggle the button 7 times.

// Sample Arrays:

// [2, 5, 435, 4, 3] // "The light is on"
// [1, 1, 1, 1, 3]   // "The light is on"
// [9, 3, 4, 2]      // "The light is off"

// The light is off to start with. Log to the console whether or not the light is on at the end.

function toggleSwitch(switches){
    var on = false;

    for(var i = 0; i < switches.length; i++){
        for(var j = 0; j < switches[i]; j++){
            on = !on;
            if(on){
                console.log("The light is on")
            }else {
                console.log("The light is off")
            }

        }
    }


    if(on){
        return "The light is on"
    }else {
        return "The light is off"
    }
}

console.log(toggleSwitch([2, 5, 435, 4, 3])); // "The light is on"
// console.log(toggleSwitch([9, 3, 4, 2])); // "The light is off"
// console.log(toggleSwitch([1, 1, 1, 1, 3])); // "The light is on"
