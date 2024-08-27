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
        { id: 1, name: 'Leather Tote', description: 'Spacious and durable', price: 150, image: bag1 },
        { id: 2, name: 'Canvas Backpack', description: 'Perfect for travel', price: 100, image: bag2 },
        { id: 3, name: 'Clutch Bag', description: 'Stylish and compact', price: 80, image: bag3 },
        { id: 4, name: 'Crossbody Bag', description: 'Convenient and chic', price: 90, image: bag4 },
        { id: 5, name: 'Messenger Bag', description: 'Professional and durable', price: 120, image: bag5 },
        { id: 6, name: 'Satchel Bag', description: 'Classic and versatile', price: 110, image: bag6 },
        { id: 7, name: 'Bucket Bag', description: 'Trendy and spacious', price: 130, image: bag7 },
        { id: 8, name: 'Hobo Bag', description: 'Relaxed and casual', price: 140, image: bag8 },
        { id: 9, name: 'Sling Bag', description: 'Easy and convenient', price: 70, image: bag9 },
        { id: 10, name: 'Briefcase', description: 'Professional and sleek', price: 200, image: bag10 },
        { id: 11, name: 'Leather Crossbody Bag', description: 'Comfortable and stylish', price: 160, image: bag11 },
        { id: 12, name: 'Canvas Crossbody Bag', description: 'Cool and stylish', price: 170, image: bag12 },
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
