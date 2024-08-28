import React from 'react';

import bag1 from '../images/11.jpg';
import bag2 from '../images/12.jpg';
import bag3 from '../images/13.jpg';
import bag4 from '../images/19.jpg';
import bag5 from '../images/14.jpg';
import bag6 from '../images/16.jpg';
import bag7 from '../images/17.jpg';
import bag8 from '../images/20.jpg';
import bag9 from '../images/18.jpg';
import bag10 from '../images/15.jpg';
import bag11 from '../images/71.jpg';
import bag12 from '../images/72.jpg';

const Bags = ({ onAddToCart }) => {
    const products = [
        { id: 1, name: 'Leather Tote Bags', description: 'Spacious and durable for everyday use', price: 150, image: bag1 },
        { id: 2, name: 'Black Canvas Backpack', description: 'Perfect for travel with a stylish design', price: 100, image: bag2 },
        { id: 3, name: 'Quilted Clutch Bag', description: 'Stylish and compact, ideal for nights out', price: 80, image: bag3 },
        { id: 4, name: 'Black Quilted Crossbody Backpack', description: 'Convenient and chic for daily wear', price: 90, image: bag4 },
        { id: 5, name: 'Pearl Handle Messenger Bag', description: 'Professional and elegant with a durable design', price: 120, image: bag5 },
        { id: 6, name: 'Pink and Beige Satchel Bag', description: 'Classic and versatile for everyday use', price: 110, image: bag6 },
        { id: 7, name: 'Green Floral Bucket Bag', description: 'Trendy and spacious with a floral touch', price: 130, image: bag7 },
        { id: 8, name: 'Pink Quilted Hobo Backpack', description: 'Relaxed and casual with a chic design', price: 140, image: bag8 },
        { id: 9, name: 'Black Sling Bag', description: 'Easy and convenient for everyday use', price: 70, image: bag9 },
        { id: 10, name: 'White Quilted Backpack', description: 'Professional and sleek with a modern design', price: 200, image: bag10 },
        { id: 11, name: 'Pink Leather Crossbody Bag', description: 'Comfortable and stylish with a cute charm', price: 160, image: bag11 },
        { id: 12, name: 'Black Canvas Crossbody Bag', description: 'Cool and stylish with a durable build', price: 170, image: bag12 },
        
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Bags</h2>
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

export default Bags;
