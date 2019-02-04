//There's some sub par conversation going on in this messaging app. 
//You have two tasks to help give it either a clean slate, or a positive start.
// #1: Write some custom JavaScript to automatically change the words of the conversation to something fun and good.
// #2: Write some JavaScript that will wait until the user clicks the "clear" button, and then clears out all conversation

//#1. Here I am accessing the document then getting the id "header" and then the innerhtml and inserting a header and subheader into the inner html
// The <span> and <div> in <h2> are to change the color of the text for the word "Jessie"
document.getElementById("header").innerHTML = `<h1 class="header">JavaScript Made This!!</h1>
<h2 class="header"><div><span class="name">Jessie </span>wrote the JavaScript</h2> </div>` 


//#2.  Here I am doing the same thing, but am replacing existing text with my new text (hence the '=').  
//Using [0] and [1] is to refer to the indexes.  Not sure why it behaves like an array, but it does...
var stringLove = "I LOVE YOU"
var stringLove2 = "No, really, I LOVE YOU"

// Why do we need to use `` when "" works?  Why do we need <div> when it works without??????
document.getElementsByClassName("message left")[0].innerHTML = `${stringLove}`
document.getElementsByClassName("message left")[1].innerHTML = `<div>${stringLove2}</div>`
document.getElementsByClassName("message right")[0].innerHTML = "No no. I LOVE YOU!"
document.getElementsByClassName("message right")[1].innerHTML = `Ok, we love each other!`


function clearButton (){
    document.getElementsByClassName("messages")[0].innerHTML = ``
}

document.getElementById("clear-button").addEventListener('click', clearButton);
////silver
//#1:
var myTheme = document.getElementsByClassName("message");

function changeBackground (){
    if (document.getElementById("theme-drop-down").value === "theme-two"){
        document.getElementsByClassName("left")[0].style.backgroundColor = "grey";
        document.getElementsByClassName("left")[1].style.backgroundColor = "grey";
        document.getElementsByClassName("right")[0].style.backgroundColor = "red";
        document.getElementsByClassName("right")[1].style.backgroundColor = "red";
    }else if (document.getElementById("theme-drop-down").value === "theme-one"){
        document.getElementsByClassName("left")[0].style.backgroundColor = "burlywood";
        document.getElementsByClassName("left")[1].style.backgroundColor = "burlywood";
        document.getElementsByClassName("right")[0].style.backgroundColor = "lightblue";
        document.getElementsByClassName("right")[1].style.backgroundColor = "lightblue";
    }else if (document.getElementById("theme-drop-down").value === "theme-three"){
        document.getElementsByClassName("left")[0].style.backgroundColor = "pink";
        document.getElementsByClassName("left")[1].style.backgroundColor = "pink";
        document.getElementsByClassName("right")[0].style.backgroundColor = "green";
        document.getElementsByClassName("right")[1].style.backgroundColor = "green";
    }
}

document.getElementById("theme-drop-down").addEventListener("change", changeBackground);


//these variables are to refernce the <form> in my html doc for the SEND button
var wordsForm = document.getElementById("words")
var msg = document.getElementById("words").msg
// // console.log(wordsForm)
function sendText (event){
    event.preventDefault()
    stringLove = stringLove2
    stringLove2 = msg.value
    document.getElementsByClassName("message left")[1].innerHTML = `<div>${stringLove2}</div>`
    document.getElementsByClassName("message left")[0].innerHTML = `<div>${stringLove}<div>`
    msg.value = `` 
}

wordsForm.addEventListener('submit', sendText)



// //NOTES FROM LECTURE FORM 2
// // create new div
// function newMessage(){
//     var newMessage = document.createElement("div");
// // // give it classes
//     newMessage.classList = "message right";
// // // give it text
//     newMessage.textContent = document.getElementById("words").value
//     document.getElementsByClassName("messages")[0].appendChild(newMessage)
// }

// document.getElementById("button").addEventListener('submit', newMessage)

