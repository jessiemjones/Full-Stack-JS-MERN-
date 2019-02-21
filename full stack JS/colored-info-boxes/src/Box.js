import React from "react";

const Box = (props) => {
    const styles = {
        backgroundColor: props.color,
        width: 200,
        height: 200,
    }
    
    
    
    
    
    return (
        <div className="box" style={styles}>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
            <p>{props.info}</p>

        </div>
    )
}

export default Box;