import React, { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { GoPlus } from "react-icons/go";
import { FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function Cart({ onClose }) {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // Load cart from localStorage
  const loadCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  };

  useEffect(() => {
    loadCart();
    window.addEventListener('cartUpdated', loadCart);
    return () => window.removeEventListener('cartUpdated', loadCart);
  }, []);

  // Update localStorage and trigger UI reload
  const updateCart = (updatedCart) => {
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  // Increase quantity
  const increment = (index) => {
    const updated = [...cartItems];
    updated[index].quantity += 1;
    updateCart(updated);
  };

  // Decrease quantity or remove
  const decrement = (index) => {
    const updated = [...cartItems];
    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
    } else {
      updated.splice(index, 1);
    }
    updateCart(updated);
  };

  // Remove item
  const removeItem = (index) => {
    const updated = [...cartItems];
    updated.splice(index, 1);
    updateCart(updated);
  };

  // Navigate to payment
  const goToPayment = () => {
    navigate('/payment');
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed right-0 top-0 w-full lg:w-[22vw] h-full bg-white shadow-lg z-50 border-l border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center my-3 p-5 border-b">
        <span className="text-xl font-semibold text-gray-800">My Order</span>
        <AiFillCloseCircle
          className="text-2xl text-red-500 hover:cursor-pointer"
          onClick={onClose}
        />
      </div>

      {/* Items */}
      <div className="px-5 pb-28 overflow-y-auto h-[75vh]">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="flex gap-2 items-center shadow-sm rounded-lg p-2 mb-4 relative">
              <MdDelete
                className="absolute right-3 top-3 text-red-500 hover:cursor-pointer"
                onClick={() => removeItem(index)}
              />
              <img src={item.image} alt={item.name} className="w-[50px] h-[50px] rounded-md" />
              <div className="flex flex-col w-full">
                <h2 className="font-semibold text-gray-800">{item.name}</h2>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-sm font-semibold text-green-600">Rs.{item.price}</span>
                  <div className="flex items-center gap-2">
                    <GoPlus
                      className="border border-gray-400 text-gray-600 hover:bg-green-500 hover:text-white rounded p-1 text-xl cursor-pointer"
                      onClick={() => increment(index)}
                    />
                    <span>{item.quantity}</span>
                    <FaMinus
                      className="border border-gray-400 text-gray-600 hover:bg-red-500 hover:text-white rounded p-1 text-xl cursor-pointer"
                      onClick={() => decrement(index)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 bg-white p-5 w-full border-t">
        <h3 className="font-semibold text-gray-700">Items: {totalItems}</h3>
        <h3 className="font-semibold text-gray-700 mb-3">Total: Rs.{totalAmount}</h3>
        <button
          onClick={goToPayment}
          disabled={cartItems.length === 0}
          className="bg-green-500 disabled:opacity-50 font-bold w-full text-white py-2 rounded-lg hover:bg-green-600 transition-all"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
