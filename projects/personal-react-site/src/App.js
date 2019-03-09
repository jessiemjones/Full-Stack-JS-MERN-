import React from 'react';
import Navbar from './nav-foot/Navbar';
import Footer from './nav-foot/Footer';

import Listpage from './pages/Listpage';
import SavedPage from './pages/Savedpage'
import Submitpage from './pages/Submitpage';
import './pages/./Pages.css'
import './App.css'

import {Switch, Route} from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path="/listpage" component={Listpage} />
                <Route path="/savedpage" component={SavedPage} />
                <Route path="/submitpage" component={Submitpage} />
            </Switch>
            <Footer />
        </div>
    );
};

export default App;
// (https://ep1.pinkbike.org/p0pb16938084/p0pb16938084.jpg);
    