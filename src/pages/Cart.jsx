import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, setCartItems }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleQuantityChange = (index, quantity) => {
        const updatedCart = [...cartItems];
        updatedCart[index].quantity = quantity;
        setCartItems(updatedCart);
    };

    const handleRemoveItem = (index) => {
        const updatedCart = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCart);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p className="text-gray-700 text-lg">Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map((item, index) => (
                        <div key={index} className="flex justify-between items-center bg-white shadow-lg p-4 mb-4 rounded">
                            <div>
                                <h3 className="font-bold text-lg">{item.name}</h3>
                                <p className="text-gray-700">{item.description}</p>
                                <div className="flex items-center mt-2">
                                    <label className="mr-2">Quantity:</label>
                                    <input 
                                        type="number" 
                                        value={item.quantity} 
                                        onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))} 
                                        className="w-16 px-2 py-1 border rounded" 
                                        min="1"
                                    />
                                </div>
                            </div>
                            <div className="text-gray-900 font-bold">
                                ${item.price * item.quantity}
                            </div>
                            <button 
                                className="text-red-500 hover:text-red-700 ml-4" 
                                onClick={() => handleRemoveItem(index)}>
                                Remove
                            </button>
                        </div>
                    ))}
                    <div className="font-bold text-xl mt-6">
                        Total: ${totalPrice}
                    </div>
                    <Link to="/checkout">
                        <button className="bg-blue-500 text-white px-3 py-2 rounded mt-4">
                            Proceed to Checkout
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Cart;
