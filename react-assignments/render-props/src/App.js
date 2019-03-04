import React from 'react';
import Toggler from './shared/Toggler'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Toggler on render={({on, toggle}) => {
          return (
          <>
            <h1>The light is: {on ? "On" : "Off"}</h1>
            <button onClick={toggle}>Light Switch</button>
          </>)
        }} />
      <Toggler render={({on, toggle}) => {
        return (
        <>
          <h1>The light is: {on ? "On" : "Off"}</h1>
          <button onClick={toggle}>Light Switch</button>
        </>
        )
        }}
      />
      <Toggler render={({on, toggle}) =>{
        return (
        <div className={on ? "box blue" : "box red"}>
            <h1>This is a cool box.</h1>
            <button onClick={toggle}>Turn the box {on ? "RED" : "BLUE"}</button>  
        </div>
        )
      }}
      />
    </div>
  );
}


export default App;