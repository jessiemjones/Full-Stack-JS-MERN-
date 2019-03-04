import React from 'react';
import Product from './Product';
import {Link, Switch, Route} from 'react-router-dom';
 
import list from './products.json';


const ProductList = () => {
    const productsMapped = list.map(product => <Link key={product._id} to={`/products/${product._id}`}>{product.name}</Link> )
    return (
        <div className='product-list'>
            <h1>Products</h1>
            <div className='product-links'>
                {productsMapped}
            </div>
         
              <Switch>
                  <Route path="/products/:_id" component={Product} />
              </Switch>
        
        </div>
    );
};

export default ProductList;