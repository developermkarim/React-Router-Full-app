import React, { useEffect, useState } from 'react';
 import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services, SetServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>SetServices(data))
    },[])
    return (
        <div id='serviceTo'>
            <h2  className='heading my-5'>Our Services</h2>
            <div className='service-container'>
                  {
                services.map(serv=> <Service
                key={serv.id}
                allServices={serv}
                ></Service>)
            }
            </div>
           
          
        </div>
    );
};

export default Services;