import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h2 className="text-xl font-bold">SabirinStyle</h2>
                        <p className="text-gray-400">Your go-to store for the latest trends in perfumes, dresses, shoes, and bags.</p>
                    </div>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 md:items-center md:justify-center">
                        <div className="flex flex-col space-y-2">
                            <p>Sabirin Mohamed Ali, Founder</p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <Link to="/about" className="text-gray-400 hover:text-white" style={{textAlign:'center'}}>About Us</Link>
                            <Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link>
                            <Link to="/perfumes" className="text-gray-400 hover:text-white">Perfumes</Link>
                            <Link to="/dresses" className="text-gray-400 hover:text-white">Dresses</Link>
                            <Link to="/shoes" className="text-gray-400 hover:text-white">Shoes</Link>
                            <Link to="/bags" className="text-gray-400 hover:text-white">Bags</Link>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center space-x-6 py-6">
                    <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
                    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FaTwitter /></a>
                    <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FaInstagram /></a>
                    <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FaLinkedinIn /></a>
                </div>
                <p className="text-center text-gray-500 text-sm mt-4">&copy; {new Date().getFullYear()} SabirinStyle. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
