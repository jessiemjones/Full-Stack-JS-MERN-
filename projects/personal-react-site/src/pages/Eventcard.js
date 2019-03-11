import React, { Component } from 'react';
import {withEvents} from '../EventProvider';

class Eventcard extends Component {
    constructor(props){
        super(props)

        this.state = {
        }
    }

    render() {
        // console.log(this.props.state)
        let {event} = this.props
        // let datee = Date(event.EventDate.replace('/', '').replace('/',''))
        return (
            <div name={event.EventId} className={event.isSaved ? "eventCard saved" : "eventCard"}>
                <h1>{event.EventName}</h1>
                {/* <p>{event.EventDate}</p> */}
                <p>Location: {event.EventCity}, {event.EventState}</p>
                <a className="eventLink" href={event.EventWebsite}>Link to event website</a>
                {/* <p>Date: {datee}</p> */}
                {this.props.button}
                
            </div>
        );
    }
}

export default withEvents(Eventcard);