import React from 'react';
// import Bounties from './Bounties'
import Navbar from './Navbar'
import firstPage from './firstPage'
import secondPage from './secondPage'
import './App.css'

import {Switch, Route} from 'react-router-dom'

const App = () => {

  return (
    <div>
        <Navbar/>
        <Switch>
          <Route exact path="/firstpage" component={firstPage}/>
          <Route exact path="/secondpage" component={secondPage}/>
        </Switch>
    </div>
  );
};

export default App;
