import React from 'react';

const SuperHeros = (props) => {
    const saySomething = () => {
        alert(props.phrase)
      }

    return (
        <div>
            <h1 onClick={saySomething}>{props.name}</h1>
            <img onClick={saySomething} src={props.image}alt={props.name}></img>
        </div>
    )
}

export default SuperHeros;