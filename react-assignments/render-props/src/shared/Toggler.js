import React, { Component } from 'react';

//we dont need React on line one because we are not returning jsx in the render.

class Toggler extends Component {
    constructor(props){
        super(props)
        this.state = {
            on: props.on
        }
    }

    toggle = () => {
        this.setState(prevState => {
            return {
                on: !prevState.on
            }
        })
    }
    render(){
        //compile all the methods and state into one object and provide it as an argument to this.props.render
        const props = { //can call 'props' anything, but props is best practice
            toggle: this.toggle, ...this.state
        }
        return this.props.render(props)
    }

    //these are both ways to do the same thing

    // render() {
    //     return this.props.render({ 
    //         on: this.state.on, toggler: this.toggler 
    //     })
    // }
}

export default Toggler;
