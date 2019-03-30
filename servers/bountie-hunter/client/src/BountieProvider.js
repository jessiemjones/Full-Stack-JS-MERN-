import React, {Component} from 'react';
import axios from 'axios';
const {Provider, Consumer} = React.createContext()

class BountieProvider extends Component {
    constructor(){
        super()

        this.state={
            bounties: [],
            bounty: '', //might use.  idk yet
            on: true  //maybue use.  idk
        }
    }
    getBounties = () => {
        axios.get('/bounties').then(response =>{
            this.setState({
                bounties: response.data
            })
        })
        // console.log(this.bounties)
    }

    postBounties = newBountie => {
        axios.post('/bounties', newBountie).then(response =>{
            console.log(response.data)
            //set the state probs
            this.setState(prevState=>({
                bounties: [...prevState.bounties, response.data]
            }))
        })
    }

    deleteBounty = _id => {
        axios.delete(`/bounties/:${_id}`).then(response =>{
            this.setState(prevState =>({
                bounties: prevState.bounties.filter(bountie => bountie._id !== _id)
            }))
            console.log(response.data)
        })
    }

    editBounty = (_id, updatedBounty) => {
        axios.put(`/bounties/:${_id}`, updatedBounty).then(response =>{
            this.setState(prevState =>({
                    bounties: prevState.bounties.map(bountie => bountie._id === _id ?
                    bountie = updatedBounty
                    :
                    bountie)
            }))
        })
    }


    render() {
        return (
            <Provider value={{
                getBounties: this.getBounties,
                postBounties: this.postBounties,
                deleteBounty: this.deleteBounty,
                editBounty: this.editBounty,
                ...this.state
            }}>
                {this.props.children}
            </Provider>
        );
    }
}

export default BountieProvider;

export function withBounties (C) {
    return props => <Consumer>
                        {value => <C {...value}{...props}/>}
                    </Consumer>
}