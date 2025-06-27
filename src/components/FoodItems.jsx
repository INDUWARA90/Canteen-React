import React from 'react';
import FoodCard from './FoodCard';

function FoodItems({ foods }) {
  return (
    <div className='mx-6 flex flex-wrap gap-11 lg:justify-start mt-10'>
      {foods.length === 0 ? (
        <p className='text-gray-500 text-lg'>No matching food items found.</p>
      ) : (
        foods.map(food => <FoodCard key={food.id} foodObj={food} />)
      )}
    </div>
  );
}

export default FoodItems;
