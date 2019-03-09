import React, { Component } from 'react';
import axios from 'axios';
const {Provider, Consumer} = React.createContext();

class EventProvider extends Component {
    constructor(){
        super()

        this.state={
            events:[],  //push everything from here into mimicked.  Add a key value pair for if it's saved or not
            mimickedEvents: [], //if this event isSaved
            savedEvents: [],

            selectedState: 'AL'
            
        }
    }

    setNewValue = newValue => {
        console.log('this is the State code:' + newValue);
        this.setState({
            selectedState: newValue
        })
        console.log(this.state.selectedState)
    }

    getEvents = async () => {
        await axios.get(`https://vschool-cors.herokuapp.com?url=http://www.BikeReg.com/api/search/?states=${this.state.selectedState}/&eventtype=Off%20Road`).then(response => {
            this.setState({
                events: response.data.MatchingEvents,
            })
        })
        this.makeMimicked(this.state.events)
    }
    
    makeMimicked = (array) => {
           const updatedArray = array.map(event =>{
                     event.isSaved=false
                     return event})
           this.setState({
               mimickedEvents: updatedArray
           })
    }
    

    //This funciton takes the parameter
    //First if statement makes and then loops over a new array and checks if the event is "saved" or not.  If, false, then it marks it true.
    //Second if statement checks if the event is saved, and if so, it adds it to the "savedEvents" array that is stored in context (prevstate gets spread in aswell).
    //   If the event is NOT saved, then it filters "savedEvents" and only returns every event that IS NOT that event
    makeSaved = id =>{
        console.log("You are great!")
        this.setState(prevState => {
            const savedEvent = prevState.mimickedEvents.find(event =>{
                if(event.EventId === id && event.isSaved === false){
                    event.isSaved = true
                    return event.EventId === id
                }else if (event.EventId === id && event.isSaved === true) {
                    event.isSaved = false
                    return false
                }
                return false
                })
                if (savedEvent) {
                    return {
                        savedEvents: [...prevState.savedEvents, savedEvent]
                    }
                }else{
                    return {
                        savedEvents: prevState.savedEvents.filter(event => event.EventId !== id)
                    }
                }
           
        })    
    }

    render() {
        // console.log(this.state.events)
        return (
            <Provider value={{
                getEvents: this.getEvents,
                ...this.state,
                events: this.state.events,
                selectedState: this.state.selectedState,
                setNewValue: this.setNewValue,
                makeSaved: this.makeSaved,
                unSave: this.unSave,
                saveIt: this.saveIt
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