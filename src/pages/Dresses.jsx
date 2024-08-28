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
import dress26 from '../images/67.jpg';
import dress27 from '../images/68.jpg';
import dress28 from '../images/69.jpg';

const Dresses = ({ onAddToCart }) => {
    const products = [
        { id: 1, name: 'Stylish Abaya', description: 'Comfortable and stylish', price: 50, image: dress1 },
        { id: 2, name: 'Abaya', description: 'Perfect for every lady', price: 40, image: dress2 },
        { id: 3, name: 'Hijab', description: 'Perfect for every Muslim girl', price: 20, image: dress3 },
        { id: 4, name: 'Abaya Dress', description: 'Beautiful floral pattern', price: 30, image: dress4 },
        { id: 5, name: 'Abaya Dress', description: 'Perfect for parties', price: 120, image: dress5 },
        { id: 6, name: 't-shirt ', description: ' It is soft and cooler ', price: 10, image: dress6 },
        { id: 7, name: ' women shirt Dress', description: 'Figure-hugging design', price: 20, image: dress7 },
        { id: 8, name: 't-shirt Dress  ', description: ' comfortable', price: 15, image: dress8 },
        { id: 9, name: 'Black Button-Up Shirt ', description: ' Classic and formal  ', price: 30, image: dress9 },
        { id: 10, name: 'Casual White Set ', description: ' Relaxed and comfortable', price: 40, image: dress10 },
        { id: 11, name: 'Blue Casual Shirt ', description: 'Simple and versatile.  ', price: 30, image: dress11 },
        { id: 12, name: 'Green Striped Shirt ', description: 'Tailored and elegant  ', price: 35, image: dress12 },
        { id: 13, name: 'Floral Button-Up Shirt ', description: 'Light and stylish  ', price: 50, image: dress13 },
        { id: 14, name: 'Casual Shorts ', description: 'Comfortable and versatile', price: 15, image: dress14 },
        { id: 15, name: 'Black Trousers ', description: 'Elegant and formal  ', price: 15, image: dress15 },
        { id: 16, name: 'Black Jeans ', description: 'Casual and classic.  ', price: 50, image: dress16 },
        { id: 17, name: ' Tiered Sundress ', description: ' Bright and playful.    ', price: 35, image: dress17 },
        { id: 18, name: 'Green Sweatshirt and Joggers Set ', description: 'Cozy and casual  ', price: 25, image: dress18 },
        { id: 19, name: 'Mint Green Dress with Cardigan ', description: 'Sweet and elegant  ', price: 70, image: dress19 },
        { id: 20, name: 'Tank Top and Shorts Set ', description: ' Comfortable and casual.  ', price: 40, image: dress20 },
        { id: 21, name: ' White Puff Sleeve Dress ', description: 'Elegant and airy for summer evenings   ', price: 20, image: dress21 },
        { id: 22, name: 'Beige Shirt and Shorts Set  ', description: 'Perfect for casual spring outings   ', price: 20, image: dress22 },
        { id: 23, name: 'Cream Polo and Shorts Set ', description: 'Simple and stylish for formal occasions  ', price: 30, image: dress23 },
        { id: 24, name: 'Black and White Varsity Jacket Set ', description: 'Ideal for cool autumn days   ', price: 40, image: dress24 },
        { id: 25, name: ' White Knit Shorts Set', description: 'Cozy and warm for cooler days   ', price: 25, image: dress25 },
        { id: 26, name: 'Green Pleated Dress ', description: ' Elegant and stylish for any occasion. ', price: 80, image: dress26 },
        { id: 27, name: ' White Ribbon Dress', description: 'Classic and timeless with a charming bow', price: 80, image: dress27 },
        { id: 28, name: ' Yellow Shirt and Shorts Set', description: 'Cool and casual for everyday wear ', price: 20, image: dress28 },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Dresses</h2>
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

export default Dresses;
