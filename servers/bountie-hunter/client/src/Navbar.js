import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="Nav-wrapper">
                <Link className="link" to="/firstpage">first page</Link>
                <Link className="link" to="/secondpage">second page</Link>
            </div>
        );
    }
}

export default Navbar;