import React from 'react';

import shoe1 from '../images/46.jpg';
import shoe2 from '../images/47.jpg';
import shoe3 from '../images/48.jpg';
import shoe4 from '../images/49.jpg';
import shoe5 from '../images/50.jpg';
import shoe6 from '../images/51.jpg';
import shoe7 from '../images/52.jpg';
import shoe8 from '../images/53.jpg';
import shoe9 from '../images/54.jpg';
import shoe10 from '../images/55.jpg';
import shoe11 from '../images/56.jpg';
import shoe12 from '../images/57.jpg';
import shoe13 from '../images/58.jpg';
import shoe14 from '../images/59.jpg';
import shoe15 from '../images/60.jpg';
import shoe16 from '../images/70.jpg';

const Shoes = ({ onAddToCart }) => {
    const products = [
        { id: 1, name: 'Nike Air Max', description: 'Sporty and comfortable', price: 120, image: shoe1 },
        { id: 2, name: 'Adidas UltraBoost', description: 'Perfect for running', price: 140, image: shoe2 },
        { id: 3, name: 'Puma RS-X', description: 'Stylish and modern', price: 110, image: shoe3 },
        { id: 4, name: 'Reebok Classic', description: 'Timeless design', price: 90, image: shoe4 },
        { id: 5, name: 'Converse Chuck Taylor', description: 'Classic and cool', price: 70, image: shoe5 },
        { id: 6, name: 'Vans Old Skool', description: 'Skateboarding shoes', price: 60, image: shoe6 },
        { id: 7, name: 'New Balance 574', description: 'Comfort and style', price: 80, image: shoe7 },
        { id: 8, name: 'ASICS Gel-Lyte', description: 'Durable and comfortable', price: 100, image: shoe8 },
        { id: 9, name: 'Jordan 1', description: 'Basketball legend', price: 150, image: shoe9 },
        { id: 10, name: 'Under Armour HOVR', description: 'High performance', price: 130, image: shoe10 },
        { id: 11, name: 'Timberland Boots', description: 'Rugged and durable', price: 160, image: shoe11 },
        { id: 12, name: 'Clarks Desert Boots', description: 'Casual and stylish', price: 120, image: shoe12 },
        { id: 13, name: 'Dr. Martens 1460', description: 'Iconic boots', price: 140, image: shoe13 },
        { id: 14, name: 'Birkenstock Sandals', description: 'Comfortable and casual', price: 80, image: shoe14 },
        { id: 15, name: 'Crocs Classic', description: 'Comfortable and trendy', price: 50, image: shoe15 },
        { id: 16, name: 'Nike Air Zoom', description: 'Comfortable and stylish', price: 90, image: shoe16 },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Shoes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <div 
                        key={product.id} 
                        className="max-w-sm rounded overflow-hidden shadow-lg bg-white transform hover:scale-105 transition-transform duration-300 ease-in-out"
                    >
                        <img 
                            className="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" 
                            src={product.image} 
                            alt={product.name} 
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{product.name}</div>
                            <p className="text-gray-700 text-base">{product.description}</p>
                            <p className="text-gray-900 font-bold text-lg">${product.price}</p>
                        </div>
                        <div className="px-6 py-4">
                            <button 
                                className="bg-blue-500 text-white px-3 py-2 rounded transform hover:scale-110 transition-transform duration-300 ease-in-out" 
                                onClick={() => onAddToCart(product)}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shoes;
