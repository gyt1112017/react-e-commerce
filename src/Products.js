import React, { useState, useEffect } from 'react';
import './Products.css';
import { addToBasket } from './BasketService';

function Products() {
  const [products, setProducts] = useState([]);

  function handleSelectProduct(product) {
    addToBasket(product);
    alert(`${product.ProductName} added to basket!`);
}

  useEffect(() => {
    fetch('http://localhost:4001/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="product-list">
      <h2>Our Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.ProductName}</span>
            <span>£{product.UnitPrice}</span>
            <button onClick={() => handleSelectProduct(product)}>Select</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
