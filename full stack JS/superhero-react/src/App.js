import React, { Component } from 'react';
import './App.css';
import SuperHeros from './SuperHeros'
import superjson from './superDATA.json'
class App extends Component {
  
  // saySomthing = () => {
  //   alert()
  // }
  
  
  render() {
    let list = superjson.map((heroObj, index) => <SuperHeros name={heroObj.name} image={heroObj.image} phrase={heroObj.catchphrase} key={index}/> );
  
  return (
    <div>
      {list}
    </div>
  )}
}
export default App;

// render() {
//   let list = superjson.map((name, index) =>{
//     return (
//       <div key={index}>{name}</div>
//   )
//   }
// )
// console.log(list)
// return (
//   <div>
//     <SuperHeros  data={list}/>
//   </div>
// )}
// }
