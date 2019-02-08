// can use constructor functions to make items, monsters, etc
var readline = require("readline-sync");

var name = readline.question("Does a girl have a name? ");

console.log("Welcome " + name + " to the den of the faceless god")

var playerHealth = 100;
var inventory = ["heartpiercer", ]

while(playerHealth > 0){
    var action = readline.keyInSelect(["Walk", "Check Inventory"], "What do you want to do? ")
    if(action === 0){
        walk()
    }else if (action === 1){
        checkInventory()
    }
}

function walk(){
    console.log("you are walking")
    if(Math.random() > .5){  //this means theres a %50 chance to get attacked
        getAttacked() //write this funciotn later.  Dont use nested funciotns 
    } else {

    
    }
}

function getAttacked(){
    var monster = new Monster()   //this is a constructor function 
    console.log("You have been attacked!");
    if (wins){
        walk(); /////// dont do this.  This is circuular.  The walk() callsthis getAttacked() and that calls walk(), etc....
    }
}

function checkInventory(){
    console.log(inventory, playerHealth)
    // display inventory array and health
}