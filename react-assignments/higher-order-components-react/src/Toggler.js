import React, { Component } from 'react';


class Toggler extends Component {
  constructor() {
    super()
    this.state = {
      on: false
    }
  }
  // toggle =() => {
  //   this.setState(({ on }) => ({ on: !on }))
  // }
  toggle = () => {
    this.setState(prevState => {
        return {
            on: !prevState.on
        }
    })
  }


  render = () => {
    const {on} = this.state;
    const {component, ...props} = this.props;
    const C = component;
    return (
      <C on={on} toggle={this.toggle}{...props}/>
    )
  }
}


 export const withToggler = (C) => props => <Toggler component={C}{...props}/>