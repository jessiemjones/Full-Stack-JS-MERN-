import React from 'react';
import list from './products.json'

const Product = (props) => {
    console.log(props.match.params._id)
    let {_id} = props.match.params
    const product = list.find(product => product._id === _id)
    let {name, price, description} = product
    return (
        <div className="product">
            <h1>{name}</h1>
            <h3>Price: ${price}</h3>
            <h3>{description}</h3>
        </div>
    );
};

export default Product;
