import React from 'react'
import { AiFillCloseCircle } from "react-icons/ai";
import ItemCard from './ItemCard';
function Cart() {
  return (
    <>
      <div className='fixed right-0 top-0  w-full lg:w-[20vw] h-full bg-white'>
        <div className='flex justify-between items-center my-3 p-5'>
          <span className='text-xl text-gray-700'>My Order</span>
          <AiFillCloseCircle className='text-2xl hover:cursor-pointer' />
        </div>

        <ItemCard />

        <div className='absolute bottom-0'>
          <h3 className='font-semibold text-gray-500'>Items :</h3>
          <h3 className='font-semibold text-gray-500'>Total Amount :</h3>
          <hr className='w-[90vw] lg:w-[18vw] mt-3 mb-3'/>
          <button className='bg-green-500 font-bold px-3 text-white py-2 rounded-lg  lg:w-[19vw] mb-5'>Checkout</button>
        </div>

      </div>


    </>

  )
}

export default Cart