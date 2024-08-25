import React from 'react';
import { Link } from 'react-router-dom';
import Perfumes from './Perfumes';
import Dresses from './Dresses';
import Shoes from './Shoes';
import Bags from './Bags';

const Home = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <section id="intro" className="py-16 text-center bg-gray-100">
                <h1 className="text-5xl font-bold mb-6">Welcome to Our E-Commerce Store</h1>
                <p className="text-lg mb-6">Shop the latest trends in perfumes, dresses, shoes, and bags.</p>
                <Link to="/perfumes" className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-400 transition duration-300">Start Shopping</Link>
            </section>

            <section id="perfumes" className="py-16">
                <h2 className="text-3xl font-bold mb-6">Perfumes</h2>
                <Perfumes />
            </section>

            <section id="dresses" className="py-16 bg-gray-100">
                <h2 className="text-3xl font-bold mb-6">Dresses</h2>
                <Dresses />
            </section>

            <section id="shoes" className="py-16">
                <h2 className="text-3xl font-bold mb-6">Shoes</h2>
                <Shoes />
            </section>

            <section id="bags" className="py-16 bg-gray-100">
                <h2 className="text-3xl font-bold mb-6">Bags</h2>
                <Bags />
            </section>
        </div>
    );
};

export default Home;
