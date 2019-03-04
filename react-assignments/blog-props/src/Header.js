import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className="header-wrapper">
            <h2>Im a header.  Nested to APP</h2>
            <Navbar />
        </div>
        
    )
}

export default Header;