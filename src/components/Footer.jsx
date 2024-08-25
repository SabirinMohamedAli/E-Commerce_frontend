import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-16">
            <div className="container mx-auto px-4 text-center">
                <p>&copy; 2024 SabirinStyle. All Rights Reserved.</p>
                <div className="mt-4">
                    <Link to="/" className="text-white hover:text-blue-300 mx-2">Home</Link>
                    <Link to="/about" className="text-white hover:text-blue-300 mx-2">About Us</Link>
                    <Link to="/contact" className="text-white hover:text-blue-300 mx-2">Contact Us</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
