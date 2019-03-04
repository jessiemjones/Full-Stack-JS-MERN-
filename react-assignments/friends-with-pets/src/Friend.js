import React from 'react';
import Pets from './Pets'

const friends = [
    {
      name: "Ben",
      age: 29,
      pets: [
        {
          name: "spot",
          breed: "tabby"
        },{
          name: "John Johnson",
          breed: "husky"
        },{
          name: "Bear the bear",
          breed: "Grizzly"
        }
      ]
    },{
      name: "Bob",
      age: 31,
      pets: [
        {
          name: "Sally",
          breed: "Australian Shepard"
        }
      ]
    },{
      name: "Marcus",
      age: 25,
      pets: [
        {
          name: "Indy",
          breed: "Akita"
        },{
          name: "Anna",
          breed: "persian cat"
        }
      ]
    },{
      name: "Jacob",
      age: 20,
      pets: [
        {
          name: "fluffy",
          breed: "sphynx cat"
        },{
          name: "patches",
          breed: "sphynx cat"
        },{
          name: "tiger",
          breed: "sphynx cat"
        },{
          name: "oscar",
          breed: "sphynx cat"
        }
      ],
      cars: [{
        make: "mazda",
        model: "hatchback"
      },{
        make: "dodge",
        model: "ram"
      }]
    }
  ]
const styles = {
    backgroundColor: "grey",
    border: "solid",
    margin: "auto",
    width: 200,
    height: "auto",
    display: "grid"
}

const Friend = () => {
    return (
        <div>
            {friends.map((friend, index) =>
            <div key={friend.name +index} style={styles}>
                <h1>{friend.name}</h1>
                <p>Age: {friend.age}</p>
                <h4>Pets:</h4>
                <Pets petsArray={friend.pets} carsArray={friend.cars} />
            </div> 
        )}
        </div>
    )
} 



export default Friend;