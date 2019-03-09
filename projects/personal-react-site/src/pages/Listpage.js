import React, { Component } from 'react';
import Eventcard from './Eventcard';
import {withEvents} from '../EventProvider';
import Form from '../Form'

class Listpage extends Component {
    componentDidMount(){
        this.props.getEvents();
        // console.log(this.props)
    }



    render() {
        // console.log(this.props)
        console.log(this.props.mimickedEvents)
        // console.log(this.props.savedEvents)
        let {mimickedEvents} = this.props
        let mappedEvents = mimickedEvents.map(event => <Eventcard key={event.EventId} event={event} button={<button className="saveButton" onClick={() => this.props.makeSaved(event.EventId)}>{event.isSaved ? 'Unsave' : 'Save'}</button>} />)

        return (
            <div className="listpage-wrapper pages">
                <Form />
                {mappedEvents}
            </div>
        );
    }
}

export default withEvents(Listpage);