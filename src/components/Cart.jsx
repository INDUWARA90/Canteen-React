import React, { useEffect, useState } from 'react';
import { AiFillCloseCircle } from "react-icons/ai";
import ItemCard from './ItemCard';

function Cart({ onClose }) {
  const [cartItems, setCartItems] = useState([]);

  const loadCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  };

  useEffect(() => {
    loadCart();
    window.addEventListener('cartUpdated', loadCart);
    return () => window.removeEventListener('cartUpdated', loadCart);
  }, []);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className='fixed right-0 top-0 w-full lg:w-[22vw] h-full bg-white shadow-lg z-50'>
      {/* Header */}
      <div className='flex justify-between items-center my-3 p-5 border-b'>
        <span className='text-xl text-gray-700'>My Order</span>
        <AiFillCloseCircle
          className='text-2xl hover:cursor-pointer text-red-500'
          onClick={onClose} // ✅ Close when clicked
        />
      </div>

      {/* Items */}
      <div className='px-5 pb-28 overflow-y-auto h-[75vh]'>
        {cartItems.length === 0 ? (
          <p className='text-center text-gray-500 mt-10'>Cart is empty</p>
        ) : (
          cartItems.map((item, index) => (
            <ItemCard key={index} item={item} index={index} />
          ))
        )}
      </div>

      {/* Footer */}
      <div className='absolute bottom-0 bg-white p-5 w-full border-t'>
        <h3 className='font-semibold text-gray-600'>Items : {totalItems}</h3>
        <h3 className='font-semibold text-gray-600'>Total Amount : Rs.{totalAmount}</h3>
        <hr className='my-3' />
        <button className='bg-green-500 font-bold w-full text-white py-2 rounded-lg hover:bg-green-600 transition-all'>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
