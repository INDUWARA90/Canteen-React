import React from 'react';
import { GoPlus } from "react-icons/go";
import { FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function ItemCard({ item, index }) {
  const handleQuantityChange = (delta) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart[index].quantity += delta;

    // Prevent quantity from going below 1
    if (cart[index].quantity < 1) {
      cart[index].quantity = 1;
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated")); // To refresh Cart
  };

  const handleDelete = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = cart.filter((_, i) => i !== index);

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <div className='flex gap-2 shadow-md rounded-lg p-2 mb-3 relative'>
      <MdDelete
        className='absolute right-3 top-3 cursor-pointer text-red-500'
        onClick={handleDelete}
      />
      <img
        src={item.image}
        alt={item.name}
        className='w-[50px] h-[50px] object-cover rounded'
      />
      <div className='leading-5 w-full pr-16'>
        <h2 className='font-semibold text-sm'>{item.name}</h2>
        <div className='flex justify-between mt-1'>
          <span className='text-sm text-green-700'>Rs.{item.price}</span>
          <div className='flex items-center gap-2 absolute right-3 bottom-3'>
            <FaMinus
              onClick={() => handleQuantityChange(-1)}
              className='border border-gray-600 p-1 text-sm rounded-md cursor-pointer hover:bg-gray-200'
            />
            <span>{item.quantity}</span>
            <GoPlus
              onClick={() => handleQuantityChange(1)}
              className='border border-gray-600 p-1 text-sm rounded-md cursor-pointer hover:bg-gray-200'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
