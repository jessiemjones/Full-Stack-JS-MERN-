var addLine = document.firstCalc
var subtractLine = document.secondCalc
var multiplyLine = document.thirdCalc


function addition(e){
    e.preventDefault()
    var result= Number(addLine.firstNum.value) + Number(addLine.secondNum.value)
    document.getElementById("firstAns").innerHTML=`${result}`
}

document.firstCalc.addEventListener("submit", addition);

function subtraction(e){
    e.preventDefault()
    var result2= Number(subtractLine.thirdNum.value) - Number(subtractLine.fourthNum.value)
    document.getElementById("secondAns").innerHTML=`${result2}`
}

document.secondCalc.addEventListener("submit", subtraction);

function multiplication(e){
    e.preventDefault()
    var result3 = Number(multiplyLine.fifthNum.value) * Number(multiplyLine.sixthNum.value)
    document.getElementById("thirdAns").innerHTML= `${result3}`
}

document.thirdCalc.addEventListener("submit", multiplication);


