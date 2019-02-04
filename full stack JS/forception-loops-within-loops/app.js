var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"



function forception(people, alphabet) {
    var combineArray = []
    for (var i = 0; i < people.length; i++){
        combineArray.push(people[i]+ ":");{
            for (var j = 0; j < alphabet.length; j++){
                combineArray.push(alphabet[j]);
            }
        }
    }
    return combineArray
}


console.log(forception(people, alphabet))
