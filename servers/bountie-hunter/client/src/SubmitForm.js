import React, { Component } from 'react';
import {withBounties} from './BountieProvider'

class SubmitForm extends Component {
    constructor(props){
        super(props)

        this.state={
            firstName: '',
            lastName: '',
            bountyAmount: '',
            type: '' 
        }
    }
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        this.props.type === "add" ? this.props.postBounties(this.state)
        :
        this.props.editBounties(this.props.bountie._id, this.state)
    }
    
    render() {
        console.log(this.props)
        return (
            <form onSubmit={this.handleSubmit}
            className={this.props.type === "add"?
            "oneclass":
            "theotherclass"}>
                <input type="text"
                       name="firstName"
                       value={this.state.firstName}
                       placeholder="First Name"
                       onChange={this.handleChange}/>
                <input type="text"
                       name="lastName"
                       value={this.state.lastName}
                       placeholder="Last Name"
                       onChange={this.handleChange}/>
                <input type="text"
                       name="bountyAmount"
                       value={this.state.bountyAmount}
                       placeholder="Bountie Amount"
                       onChange={this.handleChange}/>
                <input type="text"
                       name="type"
                       value={this.state.type}
                       placeholder="Sith or Jedi"
                       onChange={this.handleChange}/>
                <button>Submit the bountie!</button>
            </form>
        );
    }
}

export default withBounties(SubmitForm);

// First Name
// Last Name
// Living (Boolean)
// Bounty Amount (number)
// Type (‘Sith’ or ‘Jedi’)
// ID