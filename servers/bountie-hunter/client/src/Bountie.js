import React, { Component } from 'react';

class Bountie extends Component {
    render() {
        console.log(this.props)
        let {bountyAmount, firstName, lastName, living, type, _id} = this.props.bountie
        return (
            <div className="bountie-wrapper">
                <p>{firstName} {lastName}</p>
                <p>{type}</p>
                <p>Bountie: {bountyAmount}</p>
            </div>
        );
    }
}

export default Bountie;