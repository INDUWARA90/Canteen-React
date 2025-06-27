import React, { useState } from 'react';
import Header from '../components/Header';
import CatagoryMenu from '../components/CatagoryMenu';
import Cart from '../components/Cart';
import FoodItems from '../components/FoodItems';
import { FaShoppingCart } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import foodArray from '../Data/foodArray'; // ✅ Add this import

function Home() {
  const [showCart, setShowCart] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // ✅ Filter food list by search term
  const filteredFoods = foodArray.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CatagoryMenu />
      <FoodItems foods={filteredFoods} />

      {/* ✅ Floating Cart Button */}
      <button
        onClick={() => setShowCart(true)}
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 cursor-pointer"
      >
        <FaShoppingCart className="text-xl" />
      </button>

      {/* ✅ Show Cart if toggled on */}
      {showCart && <Cart onClose={() => setShowCart(false)} />}

      <ToastContainer position="bottom-right" autoClose={2000} />
    </>
  );
}

export default Home;
