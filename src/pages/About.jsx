import React from 'react';
import aboutImage from '../images/63.jpg'; // Import your image here

const About = () => {
    return (
        <div className="container mx-auto px-4 py-16  border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-8 text-center">About Us</h2>
            <div className="flex flex-col md:flex-row items-center">
                {/* Image Section */}
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <img src={aboutImage} alt="About Us" className="w-full h-auto rounded-lg shadow-md border-2 border-gray-300" />
                </div>
                {/* Text Section */}
                <div className="md:w-1/2 md:pl-8">
                    <p className="text-lg mb-4 font-serif text-gray-700 border-l-4 border-blue-500 pl-4">
                        Welcome to SabirinStyle, your number one source for all things fashion. We're dedicated to providing you the best of products, with a focus on dependability, customer service, and uniqueness.
                    </p>
                    <p className="text-lg mb-4 font-serif text-gray-700 border-l-4 border-blue-500 pl-4">
                        Founded in [2023] by Sabirin, SabirinStyle has come a long way from its beginnings in [mogadishu]. When Sabirin first started out, her passion for fashion drove her to start her own business.
                    </p>
                    <p className="text-lg mb-4 font-serif text-gray-700 border-l-4 border-blue-500 pl-4">
                        We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
                    </p>
                    <p className="text-lg font-serif text-gray-700 border-l-4 border-blue-500 pl-4">
                        Sincerely,<br />
                        Sabirin Mohamed ALi , Founder
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
