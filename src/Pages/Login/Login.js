import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.config';
import Loading from '../LoadingPage/Loading';
import './Login.css'
import SocailLink from './SocailLink/SocailLink';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const NavigateTO = ()=>{
    navigate('/register')
    }
    const [
        signInWithEmailAndPassword,
        user,
        error,
        loading,
      ] = useSignInWithEmailAndPassword(auth);

     
let errorElements;
if (error) {
    errorElements =  <p className='text-danger'>Error: {error?.message}</p>
       
   }
    const EmailRef = useRef();
    const PassRef = useRef();
    const FormHandle = event =>{
        event.preventDefault();
      const email =  EmailRef.current.value;
       const password =  PassRef.current.value;
      signInWithEmailAndPassword(email, password);
    }
    if(user){
        navigate(from, { replace: true });
    }
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth);

        if(loading || sending){
            return <Loading></Loading>
        }

    const PasswordResetHadle = async()=>{
        const email =  EmailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Password Reset SMS sent to your Email')
    }
   
    return (
        <div  className='w-25  mx-auto'>
        <h2 className='text-center mt-5'>Sign In Form</h2>
        <form  onSubmit={FormHandle}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" ref={EmailRef} id="exampleInputEmail1" aria-describedby="emailHelp" required/>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" ref={PassRef} id="exampleInputPassword1" required/>
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
    {errorElements}
      <p className='text-center text-danger mb-0'>New To Genius Car? <Link to="/register" className=' pointer text-decoration-none' onClick={NavigateTO}>Please Register</Link> </p>
      <p className='text-center text-danger mt-2 mb-0'>Forget Password? <button className=' pointer text-decoration-none btn btn-link' onClick={PasswordResetHadle}>Reset Password</button> </p>
       
      <SocailLink></SocailLink>
      </div>
    );
};

export default Login;