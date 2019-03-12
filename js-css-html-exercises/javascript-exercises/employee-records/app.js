function Car(color, numberOfWheels =4, transmistion="standard"){  //CONSTRUCTOR FUNCTION IS THE SAME THING AS A CLASS (ie PYTHON) // Defaults have to go at the end
    this.wheels = numberOfWheels 
    this.color = color 
    this.transmistion = transmistion
    this.makeSound = function(){
        return "zoom zoom"
    }
}
// you can add methods onto a constructor (called "class" in python)

//*"this"* refers to the object being made
//*"new"* is a keyword for making new constructor

var cars = [];

var myCar = new Car("red", 4)
cars.push(myCar) //same
cars.push(new Car("white, 6")) //same, just different way to type


var veronicasCar = new Car("white", 6)


console.log(myCar)
console.log(veronicasCar)