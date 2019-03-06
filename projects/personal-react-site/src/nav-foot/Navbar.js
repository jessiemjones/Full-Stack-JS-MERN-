import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="nav-wrapper">
            <Link className="link" to="/listpage" >List Page</Link>
            <Link className="link" to="/savedpage" >List Page</Link>
            <Link className="link" to="/submitpage" >Submit Page</Link>
        </div>
    );
};

export default Navbar;