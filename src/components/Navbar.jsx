import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSearch, FaHeart } from 'react-icons/fa';

const Navbar = ({ cartItemCount }) => {
    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="flex space-x-7">
                        <div>
                            <Link to="/" className="flex items-center py-4 px-2 text-gray-800">
                                <span className="font-semibold text-lg">E-Commerce</span>
                            </Link>
                        </div>
                        <div className="hidden md:flex items-center space-x-1">
                            <Link to="/" className="py-4 px-2 font-semibold hover:text-blue-500 transition duration-300 text-gray-800">Home</Link>
                            <Link to="/perfumes" className="py-4 px-2 font-semibold hover:text-blue-500 transition duration-300 text-gray-800">Perfumes</Link>
                            <Link to="/dresses" className="py-4 px-2 font-semibold hover:text-blue-500 transition duration-300 text-gray-800">Dresses</Link>
                            <Link to="/shoes" className="py-4 px-2 font-semibold hover:text-blue-500 transition duration-300 text-gray-800">Shoes</Link>
                            <Link to="/bags" className="py-4 px-2 font-semibold hover:text-blue-500 transition duration-300 text-gray-800">Bags</Link>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to="/search" className="hover:text-blue-500 transition duration-300 text-gray-800">
                            <FaSearch size={20} />
                        </Link>
                        <Link to="/favorites" className="hover:text-blue-500 transition duration-300 text-gray-800">
                            <FaHeart size={20} />
                        </Link>
                        <Link to="/cart" className="flex items-center hover:text-blue-500 transition duration-300 text-gray-800">
                            <FaShoppingCart size={20} />
                            <span className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-full">{cartItemCount}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
