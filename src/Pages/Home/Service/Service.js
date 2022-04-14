import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({allServices}) => {
    const navigation = useNavigate();
   const {id,name,price, description,img} = allServices;
    return (
        <div className='service-part'>
            <img src={img} alt=""/>
            <h2>{name}</h2>
            <h4>${price+'.00'}</h4>
            <p>{description.split(' ').slice(0,12).join(' ')}</p>
            <button onClick={()=>navigation(`/services/${id}`)} className='btn btn-primary'>{name}</button>

        </div>
    );
};

export default Service;