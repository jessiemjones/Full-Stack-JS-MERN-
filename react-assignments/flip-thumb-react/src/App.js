import React, { Component } from 'react';


class App extends Component {
 constructor(){
   super()
   this.state = {
     thumbFlip: true

   }
 }

 changeIt = () => {
    this.setState((prevState)=>{
        return {
            thumbFlip: !prevState.thumbFlip
        }
    })
}
  render() {
    let likeImage = <img src="https://images-na.ssl-images-amazon.com/images/I/51yHI0o2IjL._SX425_.jpg"></img>
    let unlikeImage = <img src="https://akns-images.eonline.com/eol_images/Entire_Site/2015315/rs_560x415-150415104200-560-facebook-dislike-button.jw.41515.jpg?fit=inside|900:auto&output-quality=90"></img>

    return (
        <div id='greet'>
            <button onClick={this.changeIt}>Click</button>
            {this.state.thumbFlip ? <div><h1>LIKE</h1></div> : <div><h1>UNLIKE</h1></div>}
            {this.state.thumbFlip ? likeImage : unlikeImage}
        </div>
        
    )
  }
}

export default App;
