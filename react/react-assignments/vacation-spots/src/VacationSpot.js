import React from 'react';

const VacationSpot = (props) => {
    console.log(props)
    let vacayColor = "";

    if (props.placeTimeToGo === "Winter"){
        vacayColor = "blue";
    }else if (props.placeTimeToGo === "Fall"){
        vacayColor = "orange";
    }else if (props.placeTimeToGo === "Spring"){
        vacayColor = "yellow";
    }else if (props.placeTimeToGo === "Summer"){
        vacayColor = "red";
    }
    let dollaSigns = "";
    if (props.placePrice <= 500){
        dollaSigns = "$"
    } else if (props.placePrice <= 1000){
        dollaSigns = "$$"
    } else{
        dollaSigns = "$$$"
    }

    const styles = {
        backgroundColor: vacayColor,
        height: 200,
        width: 250,
        margin: "auto"
    }
    
    return (
        <div className="vacayBox" style={styles}>
            <h3>{props.placeName}</h3>
            <p>Cost: {props.placePrice}</p>
            <p>Spendy?: {dollaSigns}</p>
            <p>Best time to go: {props.placeTimeToGo}</p>
        </div>
    )
}

export default VacationSpot;