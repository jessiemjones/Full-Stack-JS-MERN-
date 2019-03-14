import React, {Component} from 'react';
import axios from 'axios';
const {Provider, Consumer} = React.createContext()

class BountieProvider extends Component {
    constructor(){
        super()

        this.state={
            bounties: []
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


    render() {
        return (
            <Provider value={{
                getBounties: this.getBounties,
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