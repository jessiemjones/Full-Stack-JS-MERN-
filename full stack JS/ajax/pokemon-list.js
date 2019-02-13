var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200){
        var data = JSON.parse(xhr.responseText)
        console.log(data.objects[0].pokemon)
        for (var i = 0; i < data.objects[0].pokemon.length; i++){
            var list = document.createElement("li");
            var poke = document.createTextNode(`${data.objects[0].pokemon[i].name}`);
            list.appendChild(poke);
            document.body.appendChild(list);  
        }
    } 
};

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();


