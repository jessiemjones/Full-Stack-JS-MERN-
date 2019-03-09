import React, { Component } from 'react';
import Eventcard from './Eventcard';
import {withEvents} from '../EventProvider';
// import Form from '../Form'

class SavedPage extends Component {

    render() {
        // console.log(this.props.savedEvents)
        let {savedEvents} = this.props
        let mappedEvents = savedEvents.map(event => <Eventcard key={event.EventId} event={event} button={<button className="saveButton" onClick={() => this.props.makeSaved(event.EventId)}>{event.isSaved ? 'Unsave' : 'Save'}</button>} />)

        return (
            <div className="saved-wrapper pages">
                {mappedEvents}
            </div>
        );
    }
}

export default withEvents(SavedPage);