import React from 'react'
import { GoPlus } from "react-icons/go";
import { FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
function ItemCard() {
    return (
        <div className='flex gap-2 shadow-md rounded-lg p-2 mb-3'>
            <MdDelete className='absolute right-7 cursor-pointer'/>
            <img
                src=""
                alt="IteamImage"
                className='w-[50px] h-[50px]'
            />
            <div className='leading-5'>
                <h2>Product Name</h2>
                <div className='flex justify-between'>
                    <span>Rs.1000.00</span>
                    <div className='flex justify-center items-center gap-2 absolute right-7'>
                    <GoPlus className='border-gray-600 border-2 text-gray-500  hover:border-none rounded-md p-1 text-xl transition-all  ease-linear cursor-pointer' />
                    <span>1</span>
                    <FaMinus className='border-gray-600 border-2 text-gray-500  hover:border-none rounded-md p-1 text-xl transition-all  ease-linear cursor-pointer ' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ItemCard