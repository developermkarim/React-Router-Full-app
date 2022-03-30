import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PerMealDetails from './PerMealDetails';

const MealsDetails = () => {
    const {MealsID} = useParams() // DESTRUCTERING;
    const [Mealdetail, SetMealdetail] = useState([])
    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${MealsID}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>SetMealdetail(data.meals))
        console.log(MealsID);
    },[])
    return (
        <div>
            {
                Mealdetail.map(permealInfo=><PerMealDetails
                allPerMealInfo = {permealInfo}

                mealid = {MealsID}
                >
                </PerMealDetails>)
            }
           {/*  <img src={Mealdetail.strMealThumb} alt="" className='w-60 h-50'/>
            <h3 className='font-bold'>{Mealdetail.idMeal}</h3>
            <h4 className='font-semibold'>{Mealdetail.strMeal}</h4>
            <p>{Mealdetail.strInstructions.slice(0,15)}</p> */}
        </div>
    );
};

export default MealsDetails;