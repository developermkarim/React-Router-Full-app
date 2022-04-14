import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceID} = useParams();
    return (
        <div>
            <h2>Service Id : {serviceID}</h2>
            <div className="text-center">
            <Link to='/checkout'>
            <button className='btn btn-primary'>Proceed CheckOut</button>
            </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;