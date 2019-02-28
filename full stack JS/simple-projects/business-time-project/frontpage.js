var displayDropDown = document.getElementsByClassName("dropDown")[0];
// console.log(displayDropDown)

function hamburgerX(x) {
    x.classList.toggle("change");
    displayDropDown.classList.toggle("show")
 }