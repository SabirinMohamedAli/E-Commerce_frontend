import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center border-b border-gray-700 pb-6">
                    <div className="flex flex-col items-start">
                        <h2 className="text-xl font-bold">LOGO</h2>
                        <p className="text-gray-400">SLOGAN COMPANY</p>
                    </div>
                    <div className="flex space-x-12">
                        <div className="flex flex-col space-y-2">
                            <a href="#" className="text-gray-400 hover:text-white">Weebly Themes</a>
                            <a href="#" className="text-gray-400 hover:text-white">Pre-Sale FAQs</a>
                            <a href="#" className="text-gray-400 hover:text-white">Submit a Ticket</a>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <a href="#" className="text-gray-400 hover:text-white">Services</a>
                            <a href="#" className="text-gray-400 hover:text-white">Theme Tweak</a>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <a href="#" className="text-gray-400 hover:text-white">Showcase</a>
                            <a href="#" className="text-gray-400 hover:text-white">WidgetKit</a>
                            <a href="#" className="text-gray-400 hover:text-white">Support</a>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <a href="#" className="text-gray-400 hover:text-white">About Us</a>
                            <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
                            <a href="#" className="text-gray-400 hover:text-white">Affiliates</a>
                            <a href="#" className="text-gray-400 hover:text-white">Resources</a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center space-x-6 py-6">
                    <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
                    <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
                    <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
                    <a href="#" className="text-gray-400 hover:text-white"><FaLinkedinIn /></a>
                </div>
                <p className="text-center text-gray-500 text-sm mt-4">&copy; Copyright. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
