import React from 'react'
import { FaStar } from "react-icons/fa";
function FoodCard({foodObj}) {
  return (
    <div className='font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2'>
      <img 
        src={foodObj.image} 
        alt={foodObj.name}
        className='w-auto h-[130px] hover:scale-110 
        cursor-grab transition-all duration-500 
        ease-in-out'
       />
      <div className='text-sm flex justify-between'>
        <h2>{foodObj.name}</h2>
        <span className='text-green-500 '>Rs.{foodObj.price}</span>
      </div>
      <p className='text-sm font-normal'>{foodObj.description}</p>
      <div className='flex justify-between'>
        <span className='flex justify-center items-center'>
        <FaStar className='mr-1 text-yellow-400'/>{foodObj.rating}
        </span>
        <button className='p-3 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm'>Add to cart</button>
      </div>
    </div>
  )
}

export default FoodCard