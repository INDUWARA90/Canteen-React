import React from 'react';
import { useNavigate } from 'react-router-dom';

function CatagoryMenu() {
  const navigate = useNavigate();

  const goToCategory = (category) => {
    // You can define how "/category/all" or "/" behaves in your route
    if (category === 'all') {
      navigate('/');
    } else {
      navigate(`/category/${category}`);
    }
  };

  return (
    <div className="mx-6">
      <h3 className="text-xl font-semibold">Find The Best Food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button
          onClick={() => goToCategory('all')}
          className="px-3 py-3 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white cursor-pointer"
        >
          All
        </button>
        <button
          onClick={() => goToCategory('lunch')}
          className="px-3 py-3 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white cursor-pointer"
        >
          Lunch
        </button>
        <button
          onClick={() => goToCategory('breakfast')}
          className="px-3 py-3 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white cursor-pointer"
        >
          Breakfast
        </button>
        <button
          onClick={() => goToCategory('dinner')}
          className="px-3 py-3 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white cursor-pointer"
        >
          Dinner
        </button>
        <button
          onClick={() => goToCategory('snack')}
          className="px-3 py-3 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white cursor-pointer"
        >
          Snacks
        </button>
      </div>
    </div>
  );
}

export default CatagoryMenu;
