import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import foodArray from '../Data/foodArray';
import Header from '../components/Header';
import CatagoryMenu from '../components/CatagoryMenu';
import FoodCard from '../components/FoodCard';
import { FaShoppingCart } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
import Cart from '../components/Cart';
import 'react-toastify/dist/ReactToastify.css';

function CategoryPage() {
  const { name } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [showCart, setShowCart] = useState(false);

  // Paid Orders state
  const [paidOrders, setPaidOrders] = useState([]);

  // Load paid orders from localStorage on component mount
  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    setPaidOrders(orders);
  }, []);

  // Delete order function
  const deleteOrder = (orderId) => {
    const updatedOrders = paidOrders.filter(order => order.id !== orderId);
    setPaidOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  // Filter food items by category and search term
  const filteredItems = foodArray
    .filter(item => item.category === name)
    .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      {/* Header with Search */}
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CatagoryMenu />

      <div className="p-5">
        <h1 className="text-2xl font-bold capitalize mb-4">{name} Items</h1>

        <div className='mx-6 flex flex-wrap gap-11 lg:justify-start mt-10'>
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <FoodCard foodObj={item} key={item.id} />
            ))
          ) : (
            <p className='text-gray-500'>No items found for "{name}"</p>
          )}
        </div>
      </div>

      {/* Paid Orders Section */}
      {paidOrders.length > 0 && (
        <div className="mx-6 mt-14">
          <h2 className="text-3xl font-extrabold mb-8 text-green-600 border-b-4 border-green-400 pb-2">
            Paid Orders
          </h2>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {paidOrders.map(order => (
              <div
                key={order.id}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 flex flex-col justify-between transition-transform hover:scale-[1.03]"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Order #{order.id}
                    </h3>
                    <button
                      onClick={() => deleteOrder(order.id)}
                      className="text-red-600 hover:text-red-800 font-semibold focus:outline-none cursor-pointer"
                      aria-label={`Delete order ${order.id}`}
                    >
                      Delete
                    </button>
                  </div>

                  <p className="text-sm text-gray-500 mb-4 italic">Date: {order.date}</p>

                  <ul className="list-disc list-inside space-y-2 max-h-48 overflow-y-auto">
                    {order.items.map(item => (
                      <li
                        key={item.id}
                        className="text-gray-700 flex justify-between items-center"
                      >
                        <span>{item.name} <span className="text-sm text-gray-500">x {item.quantity}</span></span>
                        <span className="font-semibold text-green-600">
                          Rs.{(item.price * item.quantity).toFixed(2)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t pt-4">
                  <p className="text-right text-lg font-bold text-green-700">
                    Total: Rs.{order.total.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Floating Cart Button */}
      <button
        onClick={() => setShowCart(true)}
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 cursor-pointer"
      >
        <FaShoppingCart className="text-xl" />
      </button>

      {/* Cart Modal */}
      {showCart && <Cart onClose={() => setShowCart(false)} />}

      {/* Toast Messages */}
      <ToastContainer position="bottom-right" autoClose={2000} />
    </>
  );
}

export default CategoryPage;
