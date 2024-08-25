import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSearch, FaHeart } from 'react-icons/fa';

const Navbar = ({ cartItemCount }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchTerm);
        // Halkaan waxaad ku dari kartaa function-ka lagu raadinaayo alaabta
    };

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
                            <Link to="/about" className="py-4 px-2 font-semibold hover:text-blue-500 transition duration-300 text-gray-800">About</Link>
                            <Link to="/contact" className="py-4 px-2 font-semibold hover:text-blue-500 transition duration-300 text-gray-800">Contact</Link>
                            <Link to="/perfumes" className="py-4 px-2 font-semibold hover:text-blue-500 transition duration-300 text-gray-800">Perfumes</Link>
                            <Link to="/dresses" className="py-4 px-2 font-semibold hover:text-blue-500 transition duration-300 text-gray-800">Dresses</Link>
                            <Link to="/shoes" className="py-4 px-2 font-semibold hover:text-blue-500 transition duration-300 text-gray-800">Shoes</Link>
                            <Link to="/bags" className="py-4 px-2 font-semibold hover:text-blue-500 transition duration-300 text-gray-800">Bags</Link>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <form onSubmit={handleSearchSubmit} className="flex items-center">
                            <input 
                                type="text" 
                                placeholder="Search..." 
                                className="px-2 py-1 border rounded-lg"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                            <button type="submit" className="ml-2 text-gray-500 hover:text-blue-500 transition duration-300">
                                <FaSearch size={20} />
                            </button>
                        </form>
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
