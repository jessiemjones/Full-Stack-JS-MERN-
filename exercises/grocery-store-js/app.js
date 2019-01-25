var shopper = {
    firstName: "Greg",
    age: 20,
    isHungry: true,
    groceryCart: ["fruits", "veggies", "pastas"],
    eatsFood : function (phrase){
        console.log("The shopper's name is " + this.firstName + " they are " + this.age + " years old.")
    }
 }
shopper.eatsFood()
