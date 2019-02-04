var name = "Bill"
// console.log(name);
function sayGreeting(){
    name = "Fred";
    console.log(name);
}
function sayGreetings(){
    name = "Bill";
    console.log(name);
}
function sayGreetings1(){
    name = "Jon";
    console.log(name);
}

// var name = "bill"
sayGreetings1();
sayGreeting();
sayGreetings();

console.log(name);


//psuedo code about fighting:

function fightSequence(){
    var damage = attack - defence
    playerHealth -= damage; //these lines are the same
    playerHealth = playerHealth - damage; // this is the same thing ^

}

playerHealth = playerHealth - fightSequence(10,16);