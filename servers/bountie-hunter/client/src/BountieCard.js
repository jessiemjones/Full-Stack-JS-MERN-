import React, { Component } from 'react';
import {withBounties} from './BountieProvider';
import Bountie from './Bountie';

class BountieCard extends Component {
    componentDidMount() {
        this.props.getBounties()

    }
    
    render() {
        console.log(this.props.bounties)
        let {bounties} = this.props
        const mappedBounties = bounties.map(bountie => <Bountie key={bountie._id} bountie={bountie} deleteBounty={this.props.deleteBounty} editBounty={this.props.editBounty}/>)
        return (
            <div className="list-wrapper">
                {mappedBounties}
            </div>
        );
    }
}

export default withBounties(BountieCard);