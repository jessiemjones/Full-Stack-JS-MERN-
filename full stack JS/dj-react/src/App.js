import React, {Component} from 'react';
import './App.css'

class App extends Component {
    constructor(){
        super()
        //this is for info that will be changable
        this.state = {
        counter: 0,
        //   name: ''
        box1: "white",
        box2: "white",
        box3: "white",
        box4: "white",
        colorSwitch1: true,
        colorSwitch2: true,
        colorSwitch3: true,
        colorSwitch4: true,
        colorSwitch5: true,
        colorSwitch6: true,
        colorSwitch7: true,
        colorSwitch8: true,
        }
    }

    goBlackOrWhite = () => {
        let newColor = this.state.colorSwitch1 ? "black" : "white";
        this.setState(prevState => { 
            return{
                colorSwitch1: !prevState.colorSwitch1,
                box1: newColor,
                box2: newColor,
                box3: newColor,
                box4: newColor
            }
        })
    }

    goPurple = () => {
        let newColor = this.state.colorSwitch2 ? "purple" : "white";
        this.setState(prevState => {
        return{
            colorSwitch2: !prevState.colorSwitch2,
            box1: newColor,
            box2: newColor
        }
        })
    }

    goBlueLeft = () => {
        let newColor = this.state.colorSwitch3 ? "blue" : "white";
        this.setState(prevState => {
            return {
                colorSwitch3: !prevState.colorSwitch3,
                box3: newColor
            }
        })
    }

    goBlueRight = () => {
        let newColor = this.state.colorSwitch4 ? "blue" : "white";
        this.setState(prevState => {
            return {
                colorSwitch4: !prevState.colorSwitch4,
                box4: newColor
            }
        })
    }

    goBox1 = () => {
        let newColor = this.state.colorSwitch5 ? "orange" : "white";
        this.setState(prevState =>{
            return {
                colorSwitch5: !prevState.colorSwitch5,
                box1: newColor
            }
        })
    }
    goBox2 = () => {
        let newColor = this.state.colorSwitch6 ? "red" : "white";
        this.setState(prevState =>{
            return {
                colorSwitch6: !prevState.colorSwitch6,
                box2: newColor
            }
        })
    }
    goBox3 = () => {
        let newColor = this.state.colorSwitch7 ? "yellow" : "white";
        this.setState(prevState =>{
            return {
                colorSwitch7: !prevState.colorSwitch7,
                box3: newColor
            }
        })
    }
    goBox4 = () => {
        let newColor = this.state.colorSwitch8 ? "pink" : "white"
        this.setState(prevState =>{
            return {
                colorSwitch8: !prevState.colorSwitch8,
                box4: newColor
            }
        })
    }

  render(){
    return(
        <div className="djgrid">
            <div className="box" style={{backgroundColor: this.state.box1}}>1</div>
            <div className="box" style={{backgroundColor: this.state.box2}}>2</div>
            <div className="box" style={{backgroundColor: this.state.box3}}>3</div>
            <div className="box" style={{backgroundColor: this.state.box4}}>4</div>
            <button onClick={this.goBlackOrWhite}>All {this.state.colorSwitch1 ? "black" : "white"}</button>
            <button onClick={this.goPurple}>Top {this.state.colorSwitch2 ? "purple" : "white"}</button>
            <button onClick={this.goBlueLeft}>Bottom Left {this.state.colorSwitch3 ? "blue" : "white"}</button>
            <button onClick={this.goBlueRight}>Botom Right {this.state.colorSwitch4 ? "blue" : "white"}</button>
            <button onClick={this.goBox1}>Top left {this.state.colorSwitch5 ? "orange" : "white"}</button>
            <button onClick={this.goBox2}>Top right {this.state.colorSwitch6 ? "red" : "white"}</button>
            <button onClick={this.goBox3}>Bottom left {this.state.colorSwitch7 ? "yellow" : "white"}</button>
            <button onClick={this.goBox4}>Bottom right {this.state.colorSwitch8 ? "pink" : "white"}</button>
        </div>
    )
  }
}

export default App;