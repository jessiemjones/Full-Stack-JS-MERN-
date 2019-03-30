import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="Nav-wrapper">
                <Link className="link" to="/firstpage">Bountie List</Link>
                <Link className="link" to="/secondpage">Submit New Bountie</Link>
            </div>
        );
    }
}

export default Navbar;