import React, { Component } from 'react';
import {withEvents} from './EventProvider';
import SelectUSState from 'react-select-us-states';


class Form extends Component {
    constructor(props){
        super (props)

        this.state={
        }
    }
    


    render() {
        // console.log(this.props)
        let {setNewValue} = this.props
        return (
            <div className="form-wrapper">
                <p>Select a State: <SelectUSState className="stateSelector" onChange={setNewValue}/>
                </p>
                {/* <button className="submitButton" onClick={getEvents}>Submit</button> */}
            </div>    
        );
    }
}

export default withEvents(Form);

