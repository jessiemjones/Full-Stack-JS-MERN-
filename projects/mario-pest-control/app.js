function total (){
    var allTheCoins =(document.totalcoins.goomskilled.value*5)+(document.totalcoins.bobskilled.value*7)+(document.totalcoins.cheepskilled.value*11)
    document.getElementById("coinDisplay").innerHTML=`${allTheCoins}`
}
document.totalcoins.addEventListener("input", total);

