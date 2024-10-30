// Basket.js
import React, { useEffect, useState } from 'react';
import { saveBasket } from './BasketService';
import { getBasket } from './BasketService';
import './Basket.css';

function Basket() {
    const [basket, setBasket] = useState([]);

    useEffect(() => {
        setBasket(getBasket()); // Load basket from localStorage on component mount
    }, []);
    function handlePay() {
        alert('Payment successful!');
        // Update the stock quantity here
        basket.forEach(item => {
            // Adjust stock quantity here (this is just a simulation)
            item.UnitsInStock -= item.quantity;
        });
        setBasket([]); // Clear the basket
        saveBasket([]); // Clear the basket in localStorage
        window.location.href = '/products'; // Redirect to products page after payment
    }
    function handleQuantityChange(id, change) {
        const updatedBasket = basket.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + change };
            }
            return item;
        }).filter(item => item.quantity > 0);

        setBasket(updatedBasket);
        saveBasket(updatedBasket); // Update localStorage with new basket
    }
    useEffect(() => {
        setBasket(getBasket()); // Load basket from localStorage on component mount
    }, []);
    // Calculate total cost
    const totalCost = basket.reduce((total, item) => total + (item.UnitPrice * item.quantity), 0).toFixed(2);
    return (
        <div className='basket-container'>
            <h2>Shopping Basket</h2>
            <ul className="basket-list">
                {basket.map((item) => (
                    <li key={item.id} className="basket-item">
                        <span>{item.ProductName} - £{item.UnitPrice} x {item.quantity}</span>
                        <div className="quantity-controls">
                            <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                            <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className='basket-summary'>
                Total Cost: £{totalCost}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <button className='continue-shopping-button' style={{ marginBottom: '10px' }} onClick={() => window.location.href='/products'}>Continue to Shop</button>
            <button className='pay-button' style={{ marginBottom: '10px' }}  onClick={handlePay}>Pay Now</button>
            </div>
        </div>
    );
}

export default Basket;
