import React from 'react';

const Pets = (props) => {
    console.log(props)
    const mappedPets = props.petsArray.map((pet, index) => {
        return (
            <div key={pet.name + index}>
                <p>{pet.name} ({pet.breed})</p>
            </div>
        )
    }) 
    
    return (
        <div>
            {mappedPets}
        </div>
    )
} 


export default Pets;