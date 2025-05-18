import React from 'react'
import Header from '../components/Header'
import CatagoryMenu from '../components/CatagoryMenu'
import FoodItems from '../components/FoodItems'
import Cart from '../components/Cart'


function Home() {
  return (
    <>
    <Header />
    <CatagoryMenu />  
    <FoodItems/>
    <Cart />
        
    
    </>
  )
}

export default Home