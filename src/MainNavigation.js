import React from 'react';
import { Link } from 'react-router-dom';
import './MainNavigation.css';
import { getBasket } from './BasketService';

function MainNavigation() {
    const basket = getBasket();
    const isBasketEmpty = !basket || basket.length === 0;

    return (
        <header className="main-navigation">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li>
                        { !isBasketEmpty ? (
                            <Link to="/basket">Shopping Basket ({basket.length})</Link>
                        ) : (
                            <span className="disabled-link">Shopping Basket (Empty)</span>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
