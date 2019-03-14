import React, { Component } from 'react';
import {withBounties} from './BountieProvider';
import Bountie from './Bountie';

class Bounties extends Component {
    componentDidMount() {
        this.props.getBounties()

    }
    
    render() {
        console.log(this.props.bounties)
        let {bounties} = this.props
        const mappedBounties = bounties.map(bountie => <Bountie key={bountie._id} bountie={bountie}/>)
        return (
            <div className="list-wrapper">
                {mappedBounties}
            </div>
        );
    }
}

export default withBounties(Bounties);