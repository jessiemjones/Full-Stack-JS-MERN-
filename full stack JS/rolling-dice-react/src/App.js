import React, {Component} from 'react';
import './App.css'

class App extends Component {
  constructor(){
    super ()
      this.state = {
        die1: Math.floor((Math.random() * 6) + 1),
        die2: Math.floor((Math.random() * 6) + 1),
        die3: Math.floor((Math.random() * 6) + 1),
        die4: Math.floor((Math.random() * 6) + 1),
        die5: Math.floor((Math.random() * 6) + 1)
      }
  }

diceRoll = () => {
  this.setState((prevState) => {
    return {
      die1: Math.floor((Math.random() * 6) + 1),
      die2: Math.floor((Math.random() * 6) + 1),
      die3: Math.floor((Math.random() * 6) + 1),
      die4: Math.floor((Math.random() * 6) + 1),
      die5: Math.floor((Math.random() * 6) + 1)
    }
  })
}







render (){
  return (
    <div className="diceBox">
      <div className="dice">{this.state.die1}</div>
      <div className="dice">{this.state.die2}</div>
      <div className="dice">{this.state.die3}</div>
      <div className="dice">{this.state.die4}</div>
      <div className="dice">{this.state.die5}</div>
      <button className="button" onClick={this.diceRoll}>Roll Dice</button>
    </div>
  )
}





}

export default App;