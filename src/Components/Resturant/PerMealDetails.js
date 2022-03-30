import React from 'react';

const PerMealDetails = ({allPerMealInfo , mealid}) => {
    const {idMeal,strMeal,strCategory,strMealThumb} = allPerMealInfo
    return (
        <div>
              <img src={strMealThumb} alt="" className='w-60 h-50'/>
              <h2>{mealid}</h2>
            <h3 className='font-bold'>{idMeal}</h3>
            <h4 className='font-semibold'>{strMeal}</h4>
            <p>{strCategory}</p>
        </div>
    );
};

export default PerMealDetails;