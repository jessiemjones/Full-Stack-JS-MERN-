import React from 'react';
import Friend from './Friend'

const styles = {
  textAlign: "center",
  display: "grid",
}

const App = () => {
  console.log(this)
  return (
    <div style={styles}>
      <Friend />
    </div>
  )
}

export default App;
