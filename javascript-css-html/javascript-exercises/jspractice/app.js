// this function reverses a string.  "Hello World" = "dlroW olleH"
function reverseString (str){
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var reverseString = reverseArray.join("");
    console.log(reverseString)
}

reverseString("Hello World")


// This funciton determines whether the inputed string 'could' be a number or not.
function isNum (str) {
    if (str == parseInt(str)){
        return true
    }else {
        return false
    }
}
console.log(isNum("3three"))

//Determines if a number is even or odd (true for even, odd for false)
function isEvenOdd (num){
    if (num % 2 == 0){
        return true
    }else {
        return false
    }
}
console.log(isEvenOdd(6))

//Takes an array and returns the average
var arr = [643, 10, 200, 20]
average = arr.reduce(function (sum, value){
    return sum + value;
}, 0) / arr.length;
console.log(average)

//This function takes two arrays and returns a single array of the two with the numbers added aternatingly..
arr1 = [1, 2, 5, 6];
arr2 = ["c", "d", "g", "y",];

function addArr (a, b){
    var newArr = []
    for (var i = 0; i < Math.min(a.length,b.length); i++){
        newArr.push(a[i]);
        newArr.push(b[i]);
    }
    return newArr   
}
console.log(addArr(arr1, arr2))

