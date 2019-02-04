/* You're task is to display to the user the key and key code they press

Example of output: You've pressed the "a" key. It's key code is 65

Wes Bos made this https://keycode.info/ for us to use as an example */

document.addEventListener("keypress", function(e){
    var str = "youve pressed the \"" + e.key + "\" key.  Its key code is:" + e.keyCode
    document.getElementById("output").textContent = str
})