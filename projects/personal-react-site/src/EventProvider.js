import React, { Component } from 'react';
import axios from 'axios';
const {Provider, Consumer} = React.createContext();

class EventProvider extends Component {
    constructor(){
        super()

        this.state={
            events:[]
        }
    }

    toggle = () => {
        this.setState(({on})=> ({on : !on}))
    }

    getEvents = () => {
        axios.get('https://vschool-cors.herokuapp.com?url=http://www.BikeReg.com/api/search/').then(response => {
            console.log(response.data)
            this.setState({
                events: response.data
            })
        })
    }


    render() {
        return (
            <Provider value={{
                getEvents: this.getEvents,
                toggle: this.toggle,
                ...this.state
            }}>
                {this.props.children}
            </Provider>
        );
    }
}

export default EventProvider;

export function withEvents (C) {
    return props => <Consumer>
                        {value => <C {...value}
                        {...props}/>}
                    </Consumer>
}