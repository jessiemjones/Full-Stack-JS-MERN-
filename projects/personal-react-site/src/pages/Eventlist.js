import React, { Component } from 'react';
// import Eventcard from './Eventcard';
import {withEvents} from '../EventProvider';

class Eventlist extends Component {
    componentDidMount(){
        this.props.getEvents();
        console.log(this.props)
    }

    render() {
        return (
            <div>
                Hey
            </div>
        );
    }
}

export default withEvents(Eventlist);