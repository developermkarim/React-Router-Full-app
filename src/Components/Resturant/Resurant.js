import React, { useEffect, useState } from 'react';
import EveryMeal from '../EveryMeal';

const Resurant = () => {
const [searcheText, setsearcheText] = useState('')
const [meals, Setmeals] = useState([])

    useEffect(()=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searcheText}`)
    .then(res=> res.json())
    .then(data => Setmeals(data.meals))

},[searcheText])
      const searchFood = eventName =>{
        setsearcheText(eventName.target.value);
        }
   
    return (
        <div className='mt-20'>
            <h2 className='text-3xl font-bold underline'>Find the Food by Search</h2>
            <input className='font-bold py-2 px-5 mt-3' type="text" onChange={searchFood} />
            <h3 className='mt-4'>{meals.length}</h3>

            <div className='grid grid-cols-4'>
                {
                    meals.map(perMeal => <EveryMeal
                    mealInfo = {perMeal}
                    ></EveryMeal>)
                }
            </div>
        </div>
    );
};

export default Resurant;