import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EveryMeal = ({mealInfo}) => {
    const {idMeal,strMeal,strMealThumb, strInstructions} = mealInfo;
    // const params = useParams()
    let Navigate = useNavigate()
    const ShowIdMeals = ()=>{
      Navigate('/allMealstDetails/' + idMeal)
    }
    return (
        <div className='m-auto'>
            <img src={strMealThumb} alt="" className='w-60 h-50'/>
            <h3 className='font-bold'>{idMeal}</h3>
            <h4 className='font-semibold'>{strMeal}</h4>
            <p>{strInstructions.slice(0,15)}</p>
            
            {/* <button className='bg-indigo-700 mx-1 rounded-md px-2 py-1'>Click ID</button> */}
            <Link to={'/allMealstDetails/'+idMeal}>show ID</Link>
            <button onClick={ShowIdMeals} className='py-1 px-2 my-2 rounded-md bg-rose-900'>Show Details</button>
        </div>
    );
};

export default EveryMeal;