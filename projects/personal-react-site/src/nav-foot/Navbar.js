import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="nav-wrapper">
            <Link className="link" to="/about" >ABOUT</Link>
            <Link className="link" to="/listpage" >VIEW RACES</Link>
            <Link className="link" to="/savedpage" >MY RACES</Link>
        </div>
    );
};

export default Navbar;