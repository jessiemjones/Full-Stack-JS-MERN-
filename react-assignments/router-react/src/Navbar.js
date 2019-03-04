import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar-wrapper">
            <Link className="link" to="/">GO HOME</Link>
            <Link className="link" to="/about">About</Link>
            <Link className="link" to="/contact">Contact</Link>
            <Link className="link" to="/products">Products</Link>
        </div>
    );
};

export default Navbar;