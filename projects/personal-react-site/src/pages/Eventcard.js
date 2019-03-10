import React, { Component } from 'react';
import {withEvents} from '../EventProvider';

class Eventcard extends Component {
    constructor(props){
        super(props)

        this.state = {
            on: false
        }
    }
    toggle = (e) => {
        console.log("you clicked me")
        console.log(this.state)
        this.setState(({on})=> ({on : !on}))
        this.state.on ? console.log("is true") : console.log("is false");
        console.log(e.target)
    }
    render() {
        // console.log(this.props.state)
        let {event} = this.props
        let date = Date(event.EventDate.replace('/', '').replace('/',''))
        return (
            <div className="eventCard" name={event.EventId}>
                <h1>{event.EventName}</h1>
                {/* <p>{event.EventDate}</p> */}
                <p>Location: {event.EventCity}, {event.EventState}</p>
                <a className="eventLink" href={event.EventWebsite}>Link to event website</a>
                <p>Date: {date}</p>
                {this.props.button}
                
            </div>
        );
    }
}

export default withEvents(Eventcard);


// EventAddress: "464 Stokesville Rd."
// EventCity: "Stokesville"
// EventDate: "/Date(1554004800000-0400)/"
// EventEndDate: "/Date(1554004800000-0400)/"
// EventId: 40905
// EventName: "Stokesville's Stoopid 50 - 12th Annual"
// EventNotes: null
// EventPermalink: "http://www.BikeReg.com/40905"
// EventState: "VA"
// EventTypes: (2) ["Off Road", "Recreational"]
// EventUrl: "http://www.BikeReg.com/stokesville-stoopid-50"
// EventWebsite: "http://www.mountaintouring.com"
// EventZip: "22843"
// Latitude: 38.352367
// Longitude: -79.14863
// Permit: ""
// PledgeRegUrl: null
// PresentedBy: "Shenandoah Mountain Touring, LLC"
// RegCloseDate: "/Date(1553806800000-0400)/"
// RegOpenDate: "/Date(1544505300000-0500)/"

// <input name="saveevent" type="checkbox" onClick={() =>{
//     event.toggle() //toggle a star and to know which fucntion to call use ternary for functions
//     //update saved list function
//     //if is favorited then call unfavorite()
//     //else call function that favorites the event
// }}></input>