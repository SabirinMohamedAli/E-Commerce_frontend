import React from 'react';

import dress1 from '../images/21.jpg';
import dress2 from '../images/22.jpg';
import dress3 from '../images/23.jpg';
import dress4 from '../images/24.jpg';
import dress5 from '../images/25.jpg';
import dress6 from '../images/26.jpg';
import dress7 from '../images/27.jpg';
import dress8 from '../images/28.jpg';
import dress9 from '../images/29.jpg';
import dress10 from '../images/30.jpg';
import dress11 from '../images/31.jpg';
import dress12 from '../images/32.jpg';
import dress13 from '../images/33.jpg';
import dress14 from '../images/34.jpg';
import dress15 from '../images/35.jpg';
import dress16 from '../images/36.jpg';
import dress17 from '../images/37.jpg';
import dress18 from '../images/38.jpg';
import dress19 from '../images/39.jpg';
import dress20 from '../images/40.jpg';
import dress21 from '../images/41.jpg';
import dress22 from '../images/42.jpg';
import dress23 from '../images/43.jpg';
import dress24 from '../images/44.jpg';
import dress25 from '../images/45.jpg';

const Dresses = ({ onAddToCart }) => {
    const products = [
        { id: 1, name: ' stylish Abaya', description: 'Comfortable and stylish', price: 50, image: dress1 },
        { id: 2, name: 'Abaya', description: 'Perfect for every lady', price: 40, image: dress2 },
        { id: 3, name: 'Hijab', description: 'perfect for every muslim girl', price: 20, image: dress3 },
        { id: 4, name: 'Abaya Dress', description: 'Beautiful floral pattern', price: 30, image: dress4 },
        { id: 5, name: 'Abaya Dress', description: 'Perfect for parties', price: 120, image: dress5 },
        { id: 6, name: 'Maxi Dress', description: 'Long and flowing', price: 90, image: dress6 },
        { id: 7, name: 'Bodycon Dress', description: 'Figure-hugging design', price: 110, image: dress7 },
        { id: 8, name: 'Wrap Dress', description: 'Flattering and comfortable', price: 100, image: dress8 },
        { id: 9, name: 'T-shirt Dress', description: 'Casual and chic', price: 40, image: dress9 },
        { id: 10, name: 'Boho Dress', description: 'Relaxed and free-spirited', price: 75, image: dress10 },
        { id: 11, name: 'Slip Dress', description: 'Simple and stylish', price: 60, image: dress11 },
        { id: 12, name: 'Sheath Dress', description: 'Tailored and elegant', price: 130, image: dress12 },
        { id: 13, name: 'Pencil Dress', description: 'Professional and chic', price: 140, image: dress13 },
        { id: 14, name: 'A-line Dress', description: 'Classic and timeless', price: 85, image: dress14 },
        { id: 15, name: 'Lace Dress', description: 'Delicate and feminine', price: 115, image: dress15 },
        { id: 16, name: 'Mini Dress', description: 'Fun and flirty', price: 50, image: dress16 },
        { id: 17, name: 'Shirt Dress', description: 'Relaxed and casual', price: 65, image: dress17 },
        { id: 18, name: 'Kaftan Dress', description: 'Comfortable and stylish', price: 95, image: dress18 },
        { id: 19, name: 'Skater Dress', description: 'Playful and cute', price: 70, image: dress19 },
        { id: 20, name: 'Denim Dress', description: 'Casual and durable', price: 80, image: dress20 },
        { id: 21, name: 'Summer Evening Dress', description: 'Elegant summer evening wear', price: 150, image: dress21 },
        { id: 22, name: 'Casual Spring Dress', description: 'Perfect for spring outings', price: 60, image: dress22 },
        { id: 23, name: 'Formal Gown', description: 'Stunning formal gown', price: 200, image: dress23 },
        { id: 24, name: 'Autumn Dress', description: 'Ideal for autumn days', price: 85, image: dress24 },
        { id: 25, name: 'Winter Dress', description: 'Stay warm and stylish', price: 120, image: dress25 },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Dresses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                        <img className="w-full h-64 object-cover" src={product.image} alt={product.name} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{product.name}</div>
                            <p className="text-gray-700 text-base">{product.description}</p>
                            <p className="text-gray-900 font-bold text-lg">${product.price}</p>
                        </div>
                        <div className="px-6 py-4">
                            <button 
                                className="bg-blue-500 text-white px-3 py-2 rounded" 
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

export default Dresses;
