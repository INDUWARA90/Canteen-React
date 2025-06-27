import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Payment() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePayment = (e) => {
    e.preventDefault();

    const paidOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const newOrder = {
      id: Date.now(),
      items: cartItems,
      total: totalAmount,
      date: new Date().toLocaleString()
    };
    localStorage.setItem("orders", JSON.stringify([...paidOrders, newOrder]));

    localStorage.removeItem("cart");
    window.dispatchEvent(new Event("cartUpdated"));

    toast.success("Payment Successful!");
    setTimeout(() => navigate("/thank-you"), 2000);
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-600">Payment Portal</h2>

        {/* Cart Items Section */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Order Summary</h3>
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <ul className="divide-y">
              {cartItems.map((item) => (
                <li key={item.id} className="py-4 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                    <div>
                      <h4 className="font-semibold text-lg">{item.name}</h4>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-800">Rs.{item.price * item.quantity}</p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 text-sm hover:underline mt-1"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Payment Form */}
        {cartItems.length > 0 && (
          <form onSubmit={handlePayment} className="grid gap-6 border-t pt-6">
            <h3 className="text-xl font-semibold text-gray-700">Enter Card Details</h3>

            <input
              type="text"
              required
              placeholder="Card Number"
              className="p-4 border border-gray-300 rounded-md outline-none w-full"
            />
            <input
              type="text"
              required
              placeholder="Card Holder Name"
              className="p-4 border border-gray-300 rounded-md outline-none w-full"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                required
                placeholder="MM/YY"
                className="p-4 border border-gray-300 rounded-md outline-none"
              />
              <input
                type="text"
                required
                placeholder="CVV"
                className="p-4 border border-gray-300 rounded-md outline-none"
              />
            </div>

            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-all cursor-pointer"
            >
              Pay Rs.{totalAmount}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Payment;
