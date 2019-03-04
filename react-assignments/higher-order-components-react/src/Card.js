import React from 'react';
import {withToggler} from './Toggler.js'


const Card = ({on, toggle}) => {
  return (
    <div>
      <h3>My incredible Repo</h3>
      <p>My incredible description of my incredible repo</p>
      <button onClick={toggle}>{on ? "Unstar" : "Star"}</button>
    </div>
  );
};

export default withToggler(Card);







// THIS IS HOW IT LOOKS WITHOUT USING HOC.  Notice how we need to use state.  With the HOC we can use its' state.

// import React, { Component } from 'react';

// class Card extends Component {
//     constructor() {
//       super()
//       this.state = {
//         starred: false
//       }
//     }
//     toggleStar =() => {
//       this.setState(({ starred }) => ({ starred: !starred }))
//     }
//     render= () => {
//       const { starred } = this.state;
//       return (
//         <div>
//           <h3>My sweet Repo</h3>
//           <p>My sweet description</p>
//           <button onClick={this.toggleStar}>{starred ? "Unstar" : "Star"}</button>
//         </div>
//       )
//     }
//   }

//   export default Card;