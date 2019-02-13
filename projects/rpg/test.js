// function Enemy(name, health = 100){
//     this.enemyName = name
//     this.health = health 
// }

// var polliver = new Enemy("Polliver", 50)
// var enemies = [];
// // enemies.push(new Enemy("Waif"))
// enemies.push(new Enemy("Waif", 400),new Enemy("Meryn Trant"), new Enemy("The Hound", 10000),new Enemy("Frey Soldier", 50),polliver)
// console.log(enemies)

// var polliver = new Enemy("Polliver", 50)
//kill polliver, get 2 chickens, and needle "fine little blade, maybe ill clean my teeth with it"

//needle 


// Math.floor(Math.random()*3)    //gives 30% chance


// readline.keyIn("would you like to [r] or [f]", {limit: 'rf'})  // how to do keyIn


// var randomLow = Math.floor(Math.random()*10)+10;   //random *10 means 0thru10
// var randomMedium = Math.floor(Math.random()*15)+20;



// var lexLuth = new Baddie("name", randomLow, 15);

// function findPolliver(element){
//     return element === "Waif";
// }

// console.log(polliver.health);

// function Enemy(name, attack, health = 100){
//     this.name = name
//     this.attack = attack;
//     this.health = health;
//     // maybe add an attack for enemy
// }
// var enemies = [];
// var serAmory = new Enemy("Ser Amory Lorch", 10, 0);
// var tickler = new Enemy("The Tickler", 10, 999999)
// enemies.push(new Enemy("Waif", 10, 800),new Enemy("Meryn Trant", 5, 25), new Enemy("The Hound", 50, 10000),new Enemy("Frey Soldier", 10, 50),new Enemy("Polliver",5, 50),new Enemy("Wounded Lannister Soldier", 5, 20),new Enemy("Frey Soldier", 10, 50), new Enemy("Rorge", 20, 500), new Enemy("Lothar Frey", 20, 250), new Enemy("Lord Walder Frey", 5, 500), new Enemy("Littlefinger", 5, 500), serAmory, tickler)

function Enemy(name, health = 100){
    this.name = name
    this.attack = Math.floor(Math.random()*10)+7;
    this.health = health;
    // maybe add a random attack for enemy
}
var enemies = [];
var serAmory = new Enemy("Ser Amory Lorch", 999999);
var tickler = new Enemy("The Tickler", 999999)
enemies.push(new Enemy("Waif", 800),new Enemy("Meryn Trant", 400), new Enemy("Frey Soldier", 120),new Enemy("Frey Soldier", 50),new Enemy("Polliver", 50),new Enemy("Wounded Lannister Soldier", 20),new Enemy("Frey Soldier", 80), new Enemy("Rorge", 800), new Enemy("Lothar Frey", 350), new Enemy("Lord Walder Frey", 900), new Enemy("Littlefinger", 1000), serAmory, tickler, new Enemy("Frey Soldier", 100), new Enemy("Frey Soldier", 30), new Enemy("Frey Soldier", 55), new Enemy("Frey Soldier", 120), new Enemy("Frey Soldier", 130), new Enemy("Frey Soldier", 120)) 

console.log(enemies)
// console.log(getHelped())
// function getHelped(){
//     if (serAmory.health > 0){
//         console.log(serAmory)
//     } else {
//         console.log(tickler)
//     }
// }