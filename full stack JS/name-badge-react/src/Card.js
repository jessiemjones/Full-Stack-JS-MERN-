import React from 'react';

const Card = (props) => {
    console.log(props)
    const {firstName, lastName, email, placeOfBirth, phone, favoriteFood, about} = props
    return (
        <div className="Card-wrapper">
            <h2 className="badge">BADGE:</h2> 
            <div className="text">
                <div className="card">Name: {firstName} {lastName}</div>
                <div className="card">Email: {email}</div>
                <div className="card">Place Of Birth: {placeOfBirth}</div>
                <div className="card">Phone #: {phone}</div>
                <div className="card">Favorite Food: {favoriteFood}</div>
                <div className="about">{about}</div>
            </div> 
        </div>  
    )
}

export default Card;