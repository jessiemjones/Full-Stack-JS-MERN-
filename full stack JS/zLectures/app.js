sessionStorage.setIem('name', 'John');
var name = sessionStorage.getItem('name'
document.getElementById()


document.storage.addEventListener("submit", function(e){
    e.preventDefault()
    var person = addPerson()
    document.getElementById('normal').innerHTML = `<h1>Normal: ${person.fName} ${person.lName}</h1>`
 })
 
 function addPerson (){
    var form = document.storage;
    var newPerson = {
        fName: form.fname.value,
        lName: form.lname.value
    }
    form.fname.value = '';
    form.lname.value = '';
    return newPerson
 }
