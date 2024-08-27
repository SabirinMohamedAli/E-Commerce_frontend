import React, { useState } from 'react';

const Checkout = ({ cartItems, setCartItems }) => {
    const [customerInfo, setCustomerInfo] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomerInfo({
            ...customerInfo,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const order = {
            customerName: customerInfo.name,
            customerEmail: customerInfo.email,
            address: customerInfo.address,
            city: customerInfo.city,
            postalCode: customerInfo.postalCode,
            country: customerInfo.country,
            total: cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
            orderItems: cartItems.map(item => ({
                productName: item.name,
                price: item.price,
                quantity: 1 // assuming quantity is 1 for simplicity
            }))
        };

        try {
            const response = await fetch("http://localhost:3005/api/CustomerOrder", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(order)
            });

            if (response.ok) {
                alert("Order placed successfully!");
                setCartItems([]);  // Tirtir shopping cart-ka frontend-ka
                localStorage.removeItem('cartItems');  // Nadiifi localStorage ka

                // Nadiifi xogta foomka
                setCustomerInfo({
                    name: '',
                    email: '',
                    address: '',
                    city: '',
                    postalCode: '',
                    country: '',
                });
            } else {
                alert("Failed to place order. Please try again.");
            }
        } catch (error) {
            alert("An error occurred. Please try again later.");
        }
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6">Checkout</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h3 className="text-xl font-semibold mb-4">Billing Information</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                value={customerInfo.name} 
                                onChange={handleChange} 
                                className="w-full px-3 py-2 border rounded" 
                                required 
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                value={customerInfo.email} 
                                onChange={handleChange} 
                                className="w-full px-3 py-2 border rounded" 
                                required 
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Address</label>
                            <input 
                                type="text" 
                                name="address" 
                                value={customerInfo.address} 
                                onChange={handleChange} 
                                className="w-full px-3 py-2 border rounded" 
                                required 
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">City</label>
                            <input 
                                type="text" 
                                name="city" 
                                value={customerInfo.city} 
                                onChange={handleChange} 
                                className="w-full px-3 py-2 border rounded" 
                                required 
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Postal Code</label>
                            <input 
                                type="text" 
                                name="postalCode" 
                                value={customerInfo.postalCode} 
                                onChange={handleChange} 
                                className="w-full px-3 py-2 border rounded" 
                                required 
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Country</label>
                            <input 
                                type="text" 
                                name="country" 
                                value={customerInfo.country} 
                                onChange={handleChange} 
                                className="w-full px-3 py-2 border rounded" 
                                required 
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="bg-blue-500 text-white px-4 py-2 rounded">
                            Place Order
                        </button>
                    </form>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
                    <div className="bg-white p-4 rounded shadow">
                        {cartItems.map((item, index) => (
                            <div key={index} className="flex justify-between items-center mb-4">
                                <div>
                                    <h4 className="font-bold">{item.name}</h4>
                                    <p>{item.description}</p>
                                </div>
                                <div className="text-gray-900 font-bold">${item.price}</div>
                            </div>
                        ))}
                        <div className="font-bold text-xl mt-6">
                            Total: ${totalPrice}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
