import React from 'react';
import Navbar from './nav-foot/Navbar';
import Footer from './nav-foot/Footer';

import Listpage from './pages/Listpage';
import Savedpage from './pages/Savedpage';
import Submitpage from './pages/Submitpage';
import './nav-foot/./Nav-foot.css';
import './pages/./Pages.css'
import './App.css'

import {Switch, Route} from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path="/listpage" component={Listpage} />
                <Route path="/savedpage" component={Savedpage} />
                <Route path="/submitpage" component={Submitpage} />
            </Switch>
            <Footer />
        </div>
    );
};

export default App;