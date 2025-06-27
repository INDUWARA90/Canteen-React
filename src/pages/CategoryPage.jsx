import React from 'react';
import { useParams } from 'react-router-dom';
import foodArray from '../Data/foodArray';
import Header from '../components/Header';
import CatagoryMenu from '../components/CatagoryMenu';
import FoodCard from '../components/FoodCard';

function CategoryPage() {
    const { name } = useParams();
    const filteredItems = foodArray.filter(item => item.category === name);

    return (
        <>
            <Header />
            <CatagoryMenu />

            <div className="p-5">
                <h1 className="text-2xl font-bold capitalize mb-4">{name} Items</h1>
                <div className='mx-6 flex flex-wrap gap-11 lg:justify-start mt-10'> 
                    {filteredItems.length > 0 ? ( 
                        filteredItems.map((item) => (
                            <FoodCard foodObj={item} key={item.id} />
                        ))
                    ) : (
                        <p>No items found for {name}</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default CategoryPage;
