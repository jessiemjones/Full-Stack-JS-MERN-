// Make a square on the page.  Users will be able to interact change the color.
// Use different events to change the color.

// #1:  Blue when the mouse hovers over the square
var colorChange = document.getElementsByClassName("red-box")[0];
var colorChangePurp = document.getElementsByClassName("purplebox")[0];

function changeToBlue (e){
    e.target.style.backgroundColor="blue"
}
colorChange.addEventListener("mouseover", changeToBlue)
colorChangePurp.addEventListener("mouseover", changeToBlue)

// #2: Change to Red on mousedown
function changeToRed (e){
    e.target.style.backgroundColor="red"
}
colorChange.addEventListener("mousedown", changeToRed)
colorChangePurp.addEventListener("mousedown", changeToRed)

function changeToYellow (event){
    event.target.style.backgroundColor="yellow";
}
colorChange.addEventListener("mouseup", changeToYellow)
colorChangePurp.addEventListener("mouseup", changeToYellow)

function changeToGreen (e){
    e.target.style.backgroundColor="green";
}
colorChange.addEventListener("dblclick", changeToGreen)
colorChangePurp.addEventListener("dblclick", changeToGreen)

function changeToStart (e){
    e.target.style.backgroundColor="";
}
colorChange.addEventListener("pointerleave", changeToStart)
colorChangePurp.addEventListener("pointerleave", changeToStart)

function onWheelChange (e){
    if (e.deltaY > 0){
        document.getElementsByClassName("red-box")[0].style.backgroundColor="orange";
        document.getElementsByClassName("purplebox")[0].style.backgroundColor="maroon";
    }else{
        document.getElementsByClassName("red-box")[0].style.backgroundColor="pink";
        document.getElementsByClassName("purplebox")[0].style.backgroundColor="teal";
    }
}    
// document.getElementById("body").addEventListener("wheel", changeToOrange);
   
// function changeToPink (e){
// //     if (e.target.style.backgroundColor !== "orange"){
        document.getElementsByClassName("red-box")[0].style.backgroundColor="pink";
//     }
// // }
document.getElementById("body").addEventListener("wheel", onWheelChange);
// want wheel down to go pink!!


function changeToKeyColor (e){
    if (e.key === "b"){
        document.getElementsByClassName("red-box")[0].style.backgroundColor="blue";
    }else if(e.key === "r"){
        document.getElementsByClassName("red-box")[0].style.backgroundColor="red";
    }else if (e.key === "y"){
        document.getElementsByClassName("red-box")[0].style.backgroundColor="yellow";
    }else if (e.key === "g"){
        document.getElementsByClassName("red-box")[0].style.backgroundColor="green";
    }else if (e.key === "o"){
        document.getElementsByClassName("red-box")[0].style.backgroundColor="orange";
    }else {
        document.getElementsByClassName("red-box")[0].style.backgroundColor="pink"
    }
}

document.getElementById("body").addEventListener("keypress", changeToKeyColor)
// document.getElementsByClassName("red-box")[0]addEventListener("keypress", 
//     var str = "youve pressed the \"" + e.key + "\" key.  Its key code is:" + e.keyCode
//     document.getElementById("output").textContent = str
// })


// B blue 66, R red 82, Y yellow 89, G green 71, O orange 79,