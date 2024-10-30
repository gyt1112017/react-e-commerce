import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';
import { getBasket } from './BasketService';

function Welcome() {
    const basket = getBasket();
    const isBasketEmpty = !basket || basket.length ===0;
    return (
        <div className="welcome-page">
            <h1>Welcome to BOVA</h1>
            <p>
                Bova is a veterinary specials manufacturer providing high-quality veterinary pharmaceuticals and special formulations to vets.
            </p>
            <Link to="/products" className="product-link">
                See Our Products
            </Link>
            <br />
            {!isBasketEmpty ? (
                <Link to="/basket" className="basket-link">
                    Go to Shopping Basket
                </Link>
            ) : (
                <span className="basket-link disabled">Go to Shopping Basket</span>
            )}
        </div>
    );
}

export default Welcome;
