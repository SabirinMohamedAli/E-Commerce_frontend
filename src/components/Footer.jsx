import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-darkBlue text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div>
                        <h4 className="font-bold text-xl mb-4">Contact Us</h4>
                        <p className="text-gray-400">+252 612011700</p>
                        <p className="text-gray-400">thaprinmohamett1333@gmail.com
                        </p>
                        <p className="text-gray-400">Mogadishu, Somalia</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-xl mb-4">Our Services</h4>
                        <ul>
                            <li className="mb-2"><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                            <li className="mb-2"><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                            <li className="mb-2"><Link to="/Perfumes" className="text-gray-400 hover:text-white">Perfumes</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-xl mb-4">Quick Links</h4>
                        <ul>
                            <li className="mb-2"><Link to="/Shoes" className="text-gray-400 hover:text-white">Shoes</Link></li>
                            <li className="mb-2"><Link to="/Dresses" className="text-gray-400 hover:text-white">Dresses</Link></li>
                            <li className="mb-2"><Link to="/Bags" className="text-gray-400 hover:text-white">Bags</Link></li>
                            <li className="mb-2"><Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="text-center md:text-left">
                        <h4 className="font-bold text-xl mb-4">SabirinStyle</h4>
                        <div className="flex justify-center md:justify-start space-x-4 mb-4">
                            <a href="https://www.facebook.com/profile.php?id=100077115147759&mibextid=ZbWKwL" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
                            <a href="https://www.instagram.com/sapirin_mohamett?igsh=Z3NuaXd0MmVrYW5m" className="text-gray-400 hover:text-white"><FaInstagram /></a>
                            <a href="https://www.linkedin.com/in/thaprin-mohamett-4a4bb9261/" className="text-gray-400 hover:text-white"><FaLinkedinIn /></a>
                        </div>
                    </div>
                </div>
                <div className="text-center border-t border-gray-700 pt-6 mt-6">
                    <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} SabirinStyle. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
