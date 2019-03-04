import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class Hit extends Component {
    constructor(){
      super ()
      this.state = {
        // people:[],
        hits:[]
      }
    }


    async componentDidMount(){
        const response = await axios.get('https://s3.amazonaws.com/v-school/data/hitlist.json');response.data[5].image = ("https://pbs.twimg.com/media/DMsGz80VQAAeqfw.jpg");
            this.setState({
                hits: response.data,
        })
    }


  
  
  render() {
 
    const mappedHits = this.state.hits.map((person, index)=>{
        return (
            <div key={person.name + index}>
                <div>{person.name}</div>
                <img alt="person to take care of" src={person.image}></img>
            </div>
        )
    })

    return (
      <div>
        <div>HIT LIST</div>
        <div>{mappedHits} </div>
      </div>
    );
  }
}

export default Hit;