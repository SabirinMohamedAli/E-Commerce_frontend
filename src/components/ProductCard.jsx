import React, { useState } from 'react';

const ProductCard = ({ product, onAddToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value);
        if (value > 0) {
            setQuantity(value);
        }
    };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img className="w-full h-64 object-cover" src={product.image} alt={product.name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.name}</div>
                <p className="text-gray-700 text-base">
                    {product.description}
                </p>
                <p className="text-gray-900 font-bold text-lg">${product.price}</p>
                <div className="flex items-center mt-4">
                    <label className="mr-2">Quantity:</label>
                    <input 
                        type="number" 
                        value={quantity} 
                        onChange={handleQuantityChange} 
                        className="w-16 px-2 py-1 border rounded" 
                        min="1"
                    />
                </div>
            </div>
            <div className="px-6 py-4">
                <button 
                    className="bg-blue-500 text-white px-3 py-2 rounded" 
                    onClick={() => onAddToCart({ ...product, quantity })}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
