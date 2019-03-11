// User has their options: 1 Hand in hole. 2. find the key. or 3 open the door.
//Can't open door unless they find key.
//They die if they put their hand in the hole.

var ask = require("readline-sync");

var start = ask.keyInYN("*in low, raspy voice* Wanna play a game?")
// var options = ["Put you hand in mysterious hole", "Lift rug by door", "Try to open door"];
// var response = ask.keyInSelect(options)


function gameStart(){
    if (start !== true){
    console.log("Then I will kill you now!  *YOU ARE DEAD*")
    }else{
    var living = true;
    var trapped = true;
    var hasKey = false;
       
    console.log("As you can see, you are trapped in this room...  If you want to live you need to get out.  Here are your options:")
    while (living && trapped){ 
    var options = ["Put you hand in mysterious hole", "Flip switch on wall", "Try to open door"];
    var response = ask.keyInSelect(options)
    if (response === 0){
        console.log("You put your hand into the hole.... *SNAP!!* You feel a set of blades spring into your wrist.  You try pulling your hand back out but the blades just dig in deeper. You quickly bleed out. " + "*YOU ARE DEAD*")
        console.clear()
        return living = false;
    }else if (response === 1){
        if(!hasKey){
            console.log("*You flip the switch on the wall*  A ceiling fan above your head sputters and starts to spin.  A cloud of dust falls over the room.  The blades spin faster and faster.  *clink clink*  Something falls on the ground.  It's a key... I wonder what this can be used for...")
            hasKey = true
        }
        else{
            console.log("You flip the switch on the wall again, but nothing happens.  The fan seems to be broken. " +"What do you want to do next?")
        }
    } else if (response === 2){
        if (hasKey === false){
        console.log("You grab the door handle and pull on it. *thud*  Nothing happens.  It must be locked.  What do you want to do next?")
        }else{
            console.log("You use the key to unlock the door.  *click*  It's open!  You are free!!! *YOU WIN*")
            return trapped = false;
        }

    }
}}}
console.log(gameStart(start))


// var living = true;
// var trapped = true;
// var hasKey = false;

// original question

// while(living && trapped){
//     question with options
//     if(option 1)
//         living = false
//     if (option 2)
//         hasKey = true
//     else (option 3)
//         open door
//         ? has key? 
//         if(yes)
//         trapped = false;

// }}
