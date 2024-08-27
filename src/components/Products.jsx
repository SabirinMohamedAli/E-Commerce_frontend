import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = ({ onAddToCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3005/api/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <div>
            <h1>Products</h1>
            {products.length === 0 ? (
                <p>No products available.</p>
            ) : (
                <ul>
                    {products.map(product => (
                        <li key={product.id}>
                            {product.name} - ${product.price}
                            <button onClick={() => onAddToCart(product)}>Add to Cart</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Products;
