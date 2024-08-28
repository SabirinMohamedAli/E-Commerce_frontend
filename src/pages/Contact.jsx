import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
                setSuccessMessage('Thank you! Your message has been sent.');
            }, (error) => {
                console.log(error.text);
                setSuccessMessage('There was an issue submitting your message. Please try again later.');
            });

        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
            <p className="text-lg mb-6">We'd love to hear from you! Here's how you can reach us...</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="name" 
                        type="text" 
                        placeholder="Your name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="email" 
                        type="email" 
                        placeholder="Your email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
                    <textarea 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="message" 
                        placeholder="Your message" 
                        rows="5" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                    ></textarea>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Send Message
                </button>
            </form>
            {successMessage && <p className="mt-4 text-green-500">{successMessage}</p>}
        </div>
    );
};

export default Contact;
