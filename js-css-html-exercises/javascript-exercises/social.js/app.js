//Create a model to represent the database of a new social media platform you're creating. 
//It can be about whatever you want, but it needs the following:

// At least 3 nested levels of data (including objects and arrays)
// At least 1 method
// Span across at least 50 lines of code. (No empty lines)

//My work starts here:

var mountainBiker = {
    name: "Greg",
    age: 22,
    gender: "male",
    bikesOwned: [
        {name: "p slope",
        brand: "Specialized",
        type: "dirt jumper",
        travel: 100,
        fully: true,
        },
        {name: "Enduro 27.5",
        brand: "Specialized",
        type: "Enduro race bike",
        travel: 170,
        fully: true
        }
    ],
    favoriteTrails: ["Flying Monkey", "King Kong", "French Line", "Bourdozer"],
    mountainBikingFriends: [
        {
            name: "Lynda",
            age: 34,
            gender: "female",
            favoriteTrails: ["Jem", "Bearclaw Poopy", "Barrel Roll"],
            bikesOwned: [
                {name: "Epic",
                type: "XC",
                travel: 100,
                fully: false
                },
            ]  
        },
        {
            name: "Jessie",
            age: 26,
            gender: "female",
            bikesOwned: [
                {name: "Demo",
                type: "DH",
                travel: 200,
                fully: true
                },
                {name: "commuter",
                type: "Road",
                travel: 0,
                fully: false
                }    
            ],
            favoriteTrails: ["King Kong", "Lunch Line", "Grafton Mesa", "Osin"],
            favoriteZones: ["Virgin Utah", "Whistler BC", "Laguna Beach", "Temecula", "Lake Elsinore"]
        },
        {
            name: "Ryan",
            age: 30,
            gender: "male",
            likesRiding: false,
            hasBike: true,    
        },
    
        
    ],
    haveBirthday: function(){
        mountainBiker.age++
        return mountainBiker.age
    }
    
    

}

// mountainBiker.haveBirthday()
// console.log(mountainBiker.mountainBikingFriends[1].bikesOwned[0].name)
console.log(mountainBiker.haveBirthday())


