import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Perfumes from './pages/Perfumes';
import Dresses from './pages/Dresses';
import Shoes from './pages/Shoes';
import Bags from './pages/Bags';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About'; 
import Contact from './pages/Contact'; 
import  './index.css';
function App() {
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const handleRemoveFromCart = (product) => {
        setCartItems(cartItems.filter(item => item.id !== product.id));
    };

    return (
        <Router>
            <div>
                <Navbar cartItemCount={cartItems.length} />
                <Routes>
                    <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/perfumes" element={<Perfumes onAddToCart={handleAddToCart} />} />
                    <Route path="/dresses" element={<Dresses onAddToCart={handleAddToCart} />} />
                    <Route path="/shoes" element={<Shoes onAddToCart={handleAddToCart} />} />
                    <Route path="/bags" element={<Bags onAddToCart={handleAddToCart} />} />
                    <Route path="/contact" element={<Contact />} />

                    <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} onRemoveFromCart={handleRemoveFromCart} />} />
                    <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
