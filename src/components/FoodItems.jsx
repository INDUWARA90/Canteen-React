import React from 'react'
import FoodCard from './FoodCard'
import foodArray from '../Data/foodArray'

function FoodItems() {
  return (
    <div className='mx-6 flex flex-wrap gap-11 lg:justify-start mt-10'>
      {
        foodArray.map((food)=>{return <FoodCard foodObj={food} key={food.id}/>})
      }
    </div>
  )
}

export default FoodItems