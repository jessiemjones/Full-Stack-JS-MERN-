import React, { Component } from 'react';
import SubmitForm from './SubmitForm';

class Bountie extends Component {
    constructor(props){
        super(props)

        this.state = {
            toggled: true
        }
    }

    toggle = () => {
        this.setState(prevState =>({
            toggled: !prevState.toggled
        }))
    }


    render() {
        console.log(this.props)
        let {bountyAmount, firstName, lastName, living, type, _id} = this.props.bountie
        let {deleteBounty, bountie} = this.props
        return (
            <div>
                {this.state.toggled ?
                    <div className="bountie-wrapper">
                        <p>{firstName} {lastName}</p>
                        <p>{type}</p>
                        <p>Bountie: {bountyAmount}</p>
                        <button onClick={() => deleteBounty(_id)}>Delete</button>
                        <button onClick={this.toggle}>Edit meeeeee</button>
                    </div>
                :
                <>
                    <SubmitForm button="Save" type="edit" bountie={bountie}/>
                </>
                }    
            </div>
        );
    }
}

export default Bountie;