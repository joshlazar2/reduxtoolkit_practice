import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../features/CartSlice';

const Home = () => {

    const products = [
        {
            _id: 1,
            name: 'Shoes',
            quantity: 0
        },
        {
            _id: 2,
            name: 'Pants',
            quantity: 0
        }
    ]

    const cart = useSelector((state) => state.cart.items)
    const dispatch = useDispatch();

    return(
        <div>
            <h1>Products</h1>
            {
                products.map((product) => (
                    <div key={product._id}>
                        <p>Id: {product._id}</p>
                        <p>Name: {product.name}</p>
                        <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
                    </div>
                ))
            }
            <h2>Cart</h2>
            {
                cart.map((product) => (
                    <div key={product._id}>
                        <p>Id: {product._id}</p>
                        <p>Name: {product.name}</p>
                        <p>Quantity: {product.quantity}</p>
                        <button onClick={() => dispatch(removeFromCart(product))}>Remove</button>
                    </div>
                ))
            }
        </div>
    );
}

export default Home;