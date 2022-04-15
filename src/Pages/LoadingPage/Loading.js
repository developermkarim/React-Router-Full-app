import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{height:'400px'}} className='w-100 d-flex text-center justify-content-center align-items-center  text-primary'>
            <Spinner animation='border'></Spinner>
        </div>
    );
};

export default Loading;