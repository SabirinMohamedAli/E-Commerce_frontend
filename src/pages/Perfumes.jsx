import React from 'react';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import image6 from '../images/6.jpg';
import image7 from '../images/7.jpg';
import image8 from '../images/8.jpg';
import image9 from '../images/9.jpg';
import image10 from '../images/10.jpg';

const Perfumes = ({ onAddToCart }) => {
    const products = [
        { id: 1, name: 'Chanel No. 5', description: 'Luxury perfume', price: 150, image: image1 },
        { id: 2, name: 'Dior Sauvage', description: 'Fresh and spicy', price: 130, image: image2 },
        { id: 3, name: 'Gucci Bloom', description: 'Floral fragrance', price: 120, image: image3 },
        { id: 4, name: 'YSL Black Opium', description: 'Glam rock perfume', price: 140, image: image4 },
        { id: 5, name: 'Tom Ford Oud Wood', description: 'Rich and smokey', price: 200, image: image5 },
        { id: 6, name: 'Versace Eros', description: 'Bold and powerful', price: 110, image: image6 },
        { id: 7, name: 'Calvin Klein Eternity', description: 'Timeless classic', price: 90, image: image7 },
        { id: 8, name: 'Dolce & Gabbana Light Blue', description: 'Citrus and fresh', price: 100, image: image8 },
        { id: 9, name: 'Jo Malone London', description: 'Elegant and fresh', price: 180, image: image9 },
        { id: 10, name: 'Burberry Her', description: 'Modern and vibrant', price: 130, image: image10 },
    ];

    return (
        <div className="container mx-auto px-4 py-8  border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center ">Perfumes</h2>
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

export default Perfumes;
