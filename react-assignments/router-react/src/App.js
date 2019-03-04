import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar'
import './App.css'

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Productlist from './Productlist';
import Product from './Product';

import {Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Sidebar/>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route exact path="/products" component={Productlist}/>
        <Route path="/products/:_id" component={Product} />
      </Switch>
      <Footer/>
    </div>
  );
};

export default App;