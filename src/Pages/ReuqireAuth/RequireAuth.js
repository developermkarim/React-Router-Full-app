import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase.config';
import Loading from '../LoadingPage/Loading';

const RequireAuth = ({ children }) => {
    const location = useLocation();
    const [user,loading] = useAuthState(auth);
    console.log('ISused found ?',user);
    if(loading){
        return <Loading></Loading>
    }
    if(!user){
        return <Navigate to="/login" state={{from:location}} replace/>
    }
   return children;
};

export default RequireAuth;