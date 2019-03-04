import React from 'react';
import {withToggler} from './Toggler'


const Menu = ({on, toggle}) => {
  return (
    <div>
        <button onClick={toggle}>Menu</button>
        <nav className={on ? "show" : "hide"}>
          <h6>Signed in as Coder123</h6>
          <p>Your Profile</p>
          <p>Your Repositories</p>
          <p>Your Stars</p>
          <p>Your Gists</p>
        </nav>
      </div>
  );
};

export default withToggler(Menu);


//This is how it looks without using the HOC.  

// import React, { Component } from 'react';

// class Menu extends Component {
//     constructor() {
//       super()
//       this.state = {
//         show: true
//       }
//     }
//     toggleShow = () => {
//       this.setState(({ show }) => ({ show: !show }))
//     }
//     render =() =>{
//       const { show } = this.state;
//       return (
//         <div>
//           <button onClick={this.toggleShow}>Menu</button>
//           <nav className={show ? "show" : "hide"}>
//            <h6>Signed in as Coder123</h6>
//            <a>Your Profile</a>
//            <a>Your Repositories</a>
//            <a>Your Stars</a>
//            <a>Your Gists</a>
//           </nav>
//         </div>
//       )
//     }
//   }

// export default Menu;