import React, { Component } from 'react';
const {Provider, Consumer} = React.createContext(); //this allows the global state to be created.

class ThemeProvider extends Component {
    constructor(){
        super()
//THIS IS GLOBAL
        this.state = {
            title: "Drink Sprite"
        }
    }

    toggle = () => {
        this.setState(({on})=> ({on : !on}))
    }

    render() {
        return (
            <Provider value={{
                ...this.state,
                toggle: this.toggle
            }}>
                {this.props.children}
            </Provider>
        );
    }
}

export default ThemeProvider;

export function withTheme (C){
    return props => <Consumer>
                        {value => <C {...value}{...props} />}
                    </Consumer>
}
// export const {Consumer, Provider} = React.createContext()