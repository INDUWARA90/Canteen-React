import React, { useEffect, useState } from 'react';
import FoodCard from './FoodCard';

function FoodItems({ foods }) {
  const [paidOrders, setPaidOrders] = useState([]);

  // Load paid orders from localStorage on mount
  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    setPaidOrders(orders);
  }, []);

  // Delete paid order by id
  const deleteOrder = (orderId) => {
    const updatedOrders = paidOrders.filter(order => order.id !== orderId);
    setPaidOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  return (
    <div className='mx-6 mt-10 mb-18'>
      {/* Food Items */}
      <div className='flex flex-wrap gap-11 lg:justify-start'>
        {foods.length === 0 ? (
          <p className='text-gray-500 text-lg'>No matching food items found.</p>
        ) : (
          foods.map(food => <FoodCard key={food.id} foodObj={food} />)
        )}
      </div>

      {/* Paid Orders Section */}
      {paidOrders.length > 0 && (
        <div className="mt-14">
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
    </div>
  );
}

export default FoodItems;
