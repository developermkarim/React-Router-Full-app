import React from 'react';

const EveryMeal = ({mealInfo}) => {
    const {idMeal,strMeal,strMealThumb, strInstructions} = mealInfo
    return (
        <div>
            <img src={strMealThumb} alt="" />
            <h3>{idMeal}</h3>
            <h4>{strMeal}</h4>
            <p>{strInstructions.slice(0,15)}</p>
        </div>
    );
};

export default EveryMeal;