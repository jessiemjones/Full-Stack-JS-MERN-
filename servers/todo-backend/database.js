const uuid = require('uuid')

module.exports = [
    {
        name: "Buy Pizza",
        description: "Pizza is very tasty.  I need more in my life.",
        imageUrl: "http://placekitten.com/200/300",
        completed: false,
        _id: uuid.v4()
    },{
        name: "Buy Cats",
        description: "I really need a cat, so I should go to the pet store and buy one",
        imageUrl: "http://placekitten.com/201/301",
        completed: false,
        _id: uuid.v4()
    },{
        name: "Go to Gym",
        description: "I need to train!",
        imageUrl: "http://placekitten.com/202/303",
        completed: false,
        _id: uuid.v4()
    },{
        name: "Do laundry",
        description: "clean clothes are da best",
        imageUrl: "http://placekitten.com/203/303",
        completed: false,
        _id: uuid.v4()
    }


]