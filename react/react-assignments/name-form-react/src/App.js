import React, { Component } from 'react';
import './App.css';

class App extends Component {
 constructor(){
   super()
   this.state = {
     firstName: '',
     lastName: '',
     namesArray: []
   }
 }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
      

    })
  }

  pushNames = (e) => {
    e.preventDefault();
    let name = `${this.state.firstName} ${this.state.lastName}`;
    this.setState((prevState)=>{
      return {
        namesArray: [...prevState.namesArray, name]
      }
      
    })
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({
      firstName: '',
      lastName: '',
    })
  }  
  render() {
    let nameList = this.state.namesArray.map((name, index) =>{
      return (
        <li key={index}>{name}</li>
      )
    })
    return (
      <div>
        <form className="App" onSubmit={this.pushNames}>
          <input value={this.state.firstName} type="text" name="firstName" placeholder="First Name" onChange={this.handleChange}></input>
          <br/>
          <input value={this.state.lastName} type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange}></input>
          <h1>{this.state.firstName} {this.state.lastName}</h1>
          <button >Add name to list of BERNIE SANDERS SUPPORTERS</button>
        </form>

        <ul>
          {nameList}
        </ul>
      </div>  
    );
  }
}

export default App;
