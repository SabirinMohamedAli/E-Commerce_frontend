import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About'; // Import About page
import Contact from './pages/Contact'; // Import Contact page
import Perfumes from './pages/Perfumes';
import Dresses from './pages/Dresses';
import Shoes from './pages/Shoes';
import Bags from './pages/Bags';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    return (
        <Router>
            <div>
                <Navbar cartItemCount={cartItems.length} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} /> {/* About Route */}
                    <Route path="/contact" element={<Contact />} /> {/* Contact Route */}
                    <Route path="/perfumes" element={<Perfumes onAddToCart={handleAddToCart} />} />
                    <Route path="/dresses" element={<Dresses onAddToCart={handleAddToCart} />} />
                    <Route path="/shoes" element={<Shoes onAddToCart={handleAddToCart} />} />
                    <Route path="/bags" element={<Bags onAddToCart={handleAddToCart} />} />
                    <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
                    <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
