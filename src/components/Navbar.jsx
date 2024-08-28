import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ cartItemCount }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <Link to="/" className="text-gray-800 text-4xl font-semibold font-serif">SabirinStyle </Link>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                    <div className={`md:flex space-x-7 ${isOpen ? 'block' : 'hidden'} md:block`}>
                        <Link to="/" className="block py-2 text-gray-800 hover:text-blue-500">Home</Link>
                        <Link to="/about" className="block py-2 text-gray-800 hover:text-blue-500">About</Link>
                        <Link to="/perfumes" className="block py-2 text-gray-800 hover:text-blue-500">Perfumes</Link>
                        <Link to="/dresses" className="block py-2 text-gray-800 hover:text-blue-500">Dresses</Link>
                        <Link to="/shoes" className="block py-2 text-gray-800 hover:text-blue-500">Shoes</Link>
                        <Link to="/bags" className="block py-2 text-gray-800 hover:text-blue-500">Bags</Link>
                        <Link to="/contact" className="block py-2 text-gray-800 hover:text-blue-500">Contact</Link>

                        <div className="flex items-center space-x-4">
                            <span className="hover:text-blue-500 transition duration-300 text-gray-800 cursor-pointer">
                                <FaHeart size={20} />
                            </span>
                            <Link to="/cart" className="flex items-center hover:text-blue-500 transition duration-300 text-gray-800">
                                <FaShoppingCart size={20} />
                                <span className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-full">{cartItemCount}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
