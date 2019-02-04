// Create a new JavaScript file and put these two arrays at the beginning. You will write a single function that performs many operations on them.

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// After every command, use console.log() to inspect your arrays. A good way to do that is to do something like:
// console.log("fruit: ", fruit);
// console.log("vegetables: ", vegetables);

// #1: Remove the last item from the vegetable array.
// #2: Remove the first item from the fruit array.
// #3: Find the index of "orange."
// #4: Add that number to the end of the fruit array.
// #5: Use the length property to find the length of the vegetable array.
// #6: Add that number to the end of the vegetable array.
// #7: Put the two arrays together into one array. Fruit first. Call the new Array "food".
// #8: Remove 2 elements from your new array starting at index 4 with one method.
// #9: Reverse your array.
// #10: Turn the array into a string and return it.

// If everything is done correctly, it should pring the following to the console:
// 3,pepper,1,watermelon,orange,apple

// #1: Remove the last item from the vegetable array.
// var poppedVeggie = 
vegetables.pop()
// console.log(poppedVeggie);
// console.log(vegetables);

// #2: Remove the first item from the fruit array.
// var shiftedFruit = 
fruit.shift()
// console.log(shiftedFruit);
// console.log(fruit);

// #3: Find the index of "orange."
// var indexedFruit = fruit.indexOf("orange")
// console.log(indexedFruit);
// ^^^^^ this prints the number '1'

// #4: Add that number to the end of the fruit array.
fruit.push(1)
// console.log(fruit);

// #5: Use the length property to find the length of the vegetable array.
// var lengthOfVeggies = 
// vegetables.length;
// console.log(lengthOfVeggies);
// ^^^^^^^ this prints the number '3'

// #6: Add that number to the end of the vegetable array.
vegetables.push(3);
// console.log(vegetables);

// // #7: Put the two arrays together into one array. Fruit first. Call the new Array "food".
var food = fruit.concat(vegetables);
// console.log(food)

// // #8: Remove 2 elements from your new array starting at index 4 with one method.
// food.splice(4,2);
// // console.log(food);

// // #9: Reverse your array.
// food.reverse();
// // console.log(food);

// // #10: Turn the array into a string and return it.
// // var foodString = 
// food.toString();
// console.log(food);

