import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import Products from './products/Products'
import Info from './Info'

const App = () => {
    return (
        <div>
            <Navbar/>
            <Info/>
            <Products/>
            <Footer/>
        </div>
    )
}

export default App;