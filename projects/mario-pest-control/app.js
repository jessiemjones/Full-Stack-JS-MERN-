function total (){
    var allTheCoins =(document.totalcoins.goomskilled.value*5)+(document.totalcoins.bobskilled.value*7)+(document.totalcoins.cheepskilled.value*11)
    document.getElementById("coinDisplay").innerHTML=`${allTheCoins}`
}
document.totalcoins.addEventListener("input", total);

// That one line is doing a ton! Good Work. Start practicing making your code as readable as possilbe
// One liners are fun, but hard to debug