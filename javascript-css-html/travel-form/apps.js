document.passengerData.addEventListener("submit", function (e){
    e.preventDefault();
    var dietaryRestrictions = document.passengerData.diet
    var checkedDiets = []
    for (var i = 0; i < dietaryRestrictions.length; i ++){
        if(dietaryRestrictions[i].checked){
            checkedDiets.push(dietaryRestrictions[i].value)
        }
    } alert(`First Name: ${document.passengerData.fName.value}\n Last Name:${document.passengerData.lName.value} \n Age:${(document.passengerData.age.value)} \n Gender:${(document.passengerData.gender.value)} \n Destination:${(document.passengerData.select.value)} \n Dietary Restrictions:${(document.passengerData.diet.value)}${checkedDiets}`)
})




