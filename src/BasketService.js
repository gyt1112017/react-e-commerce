// BasketService.js
import BasketItem from './BasketItem';

const BASKET_KEY = 'shoppingBasket';

export function getBasket() {
    const storedBasket = localStorage.getItem(BASKET_KEY);
    return storedBasket ? JSON.parse(storedBasket) : [];
}

export function saveBasket(basket) {
    localStorage.setItem(BASKET_KEY, JSON.stringify(basket));
}

export function addToBasket(product) {
    const basket = getBasket();
    const existingItem = basket.find(item => item.id === product.id);

    if (existingItem) {
        if (existingItem.quantity < product.UnitsInStock) {
            existingItem.quantity += 1; // Increase quantity if item exists and there's enough stock
            alert(`${product.ProductName} quantity increased to ${existingItem.quantity}.`);
        } else {
            alert(`Cannot add more ${product.ProductName}. Only ${product.UnitsInStock} units in stock.`);
        }
    } else {
        if (product.UnitsInStock > 0) {
            const newItem = new BasketItem(product.id, product.ProductName, product.UnitPrice, 1);
            basket.push(newItem); // Add new item if it doesn't exist
            alert(`${product.ProductName} added to basket!`);
        } else {
            alert(`${product.ProductName} is out of stock.`);
        }
    }

    saveBasket(basket); // Save updated basket to localStorage
}
