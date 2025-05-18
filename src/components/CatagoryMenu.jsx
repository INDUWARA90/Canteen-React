import React from 'react'

function CatagoryMenu() {
  return (
    <div className="mx-6">
        <h3 className='text-xl font-semibold'>Find The Best Food</h3>
        <div className="my-5 flex  gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
            <button className='px-3 py-3 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white cursor-pointer'>All</button>
            <button className='px-3 py-3 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white cursor-pointer'>Lunch</button>
            <button className='px-3 py-3 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white cursor-pointer'>Breakfast</button>
            <button className='px-3 py-3 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white cursor-pointer'>Dinner</button>
            <button className='px-3 py-3 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white cursor-pointer'>Snacks</button>
        </div>
    </div>
  )
}

export default CatagoryMenu